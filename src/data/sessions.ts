import { getTable } from "./table";

const TABLE_NAME = "sessions";
const FIELDS = ["id", "name", "active"];

const Sessions = getTable<Session>(TABLE_NAME, FIELDS);

export default Sessions;
