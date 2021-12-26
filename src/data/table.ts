import { PostgrestError, SupabaseClient } from "@supabase/supabase-js";
import { SupabaseQueryBuilder } from "@supabase/supabase-js/dist/main/lib/SupabaseQueryBuilder";
import { client } from "./client";

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

type DataTypes = string | boolean | number | JSON;

type ColumnType = DataTypes | DataTypes[];

export class Table<T extends Record<string, ColumnType>> {
  tableName: string;
  client: SupabaseClient;

  constructor(tableName) {
    this.tableName = tableName;
    this.client = client;
  }

  private query(): SupabaseQueryBuilder<T> {
    return this.client.from<T>(this.tableName);
  }

  private async handleResponse({ data, error }: { data: T[]; error: PostgrestError }): Promise<T[] | PostgrestError> {
    if (error) {
      throw error;
    }

    return data;
  }

  async getAll(columns = "*") {
    return this.handleResponse(await this.query().select(columns));
  }

  async get(match, columns = "*") {
    return this.handleResponse(await this.query().select(columns).match(match));
  }

  async update(match, data) {
    return this.handleResponse(await this.query().update(data).match(match));
  }

  async delete(match) {
    return this.handleResponse(await this.query().delete().match(match));
  }
}

interface TableI<T> {
  getAll(columns?: string): Promise<T[] | PostgrestError>;
  get(match: Record<string, ColumnType>, columns?: string): Promise<T[] | PostgrestError>;
  update(match: Record<string, ColumnType>, data: Record<string, ColumnType>): Promise<T[] | PostgrestError>;
  delete(match: Record<string, ColumnType>): Promise<T[] | PostgrestError>;
}

type TableClient<T> = TableI<T> &
  Partial<{
    [Property in keyof T as `getBy${Capitalize<string & Property>}`]: (
      val: T[Property],
    ) => Promise<T[] | PostgrestError>;
  }>;

export function getTable<T extends Record<string, ColumnType>>(tableName: string, fields: string[]): TableClient<T> {
  const table = new Table<T>(tableName);

  const obj: TableClient<T> = Object.create(table);

  fields.forEach((field) => {
    const propName = `getBy${capitalize(field)}`;
    table[propName] = (value) => table.get({ [field]: value });
    table[propName] = obj[propName];
    obj[propName] = table[propName].bind(table);
  });

  return obj;
}
