import { getTable } from "./table";

const TABLE_NAME = "songs";

const FIELDS = ["id", "title", "author"];

const Songs = getTable<Song>(TABLE_NAME, FIELDS);

export default Songs;
