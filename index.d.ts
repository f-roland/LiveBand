declare type ResponsiveSpecs<T> = {
  mobile: T;
  tablet?: T;
  desktop: T;
};

declare type TableType<T extends Record<string, ColumnType>> = {
  id: string;
  created_at: string;
} & T;

type Song = TableType<{
  title: string;
  author: string;
  key: string;
  tags: string;
  lines: string[];
}>;

type Playlist = TableType<{
  name: string;
  type: "global" | "session";
  songs: string[];
}>;

type Session = TableType<{
  name: string;
  active: boolean;
}>;
