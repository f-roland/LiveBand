import fs from "fs";
import path from "path";
import * as R from "ramda";

const fileName = "-M- je dis aime.txt";
const songsFolder = path.resolve(process.cwd(), "./songs");

async function parseSong() {
  const file = await fs.promises.readFile(path.resolve(songsFolder, fileName));
  const [title, author, key, tags, _, ...lines] = R.split("\n", file.toString());

  return { title, author, key, tags, lines };
}

export default async function handler(req, res) {
  const song = await parseSong();
  res.status(200).json({ song });
}
