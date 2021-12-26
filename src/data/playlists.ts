import { getTable } from "./table";

const TABLE_NAME = "playlists";
const FIELDS = ["id", "name", "type", "songs"];

const Playlists = getTable<Playlist>(TABLE_NAME, FIELDS);

export default Playlists;
