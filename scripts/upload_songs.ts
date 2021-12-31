/* eslint-disable @typescript-eslint/no-var-requires */
/// <reference types=".." />

import fs from "fs";
import path from "path";
import * as R from "ramda";
import songClient from "../src/data/songs";
import { v4 } from "uuid";

const songsFolder = path.join(process.cwd(), "songs");

const errors = [];

const sleep = async (duration) => new Promise((resolve) => setTimeout(resolve, duration));

async function run() {
  const songs = await fs.promises.readdir(songsFolder);

  const remoteSongs = await songClient.getAll();

  const titles = R.compose(R.map(R.prop("title")), R.values)(remoteSongs);

  console.log({ count: titles.length, unique: R.uniq(titles).length });

  // const p = songs.map(async (song) => {
  //   if (song === "." || song === ".." || song === "_old") return;

  //   try {
  //     const file = await fs.promises.readFile(path.join(songsFolder, song));
  //     const [title, author, key, tags, _, ...lines] = R.split("\n", file.toString());

  //     if (R.contains(title, titles)) return;

  //     const id = v4();
  //     const result = await songClient.create({ id, title, author, key, tags, lines });

  //     console.log({ result, song });

  //     await sleep(200);
  //   } catch (e) {
  //     console.error(new Error(`error processing ${song}`));
  //     console.error(e);
  //     errors.push({ song, reason: e.message });
  //   }
  // });

  // await Promise.all(p);
  await fs.promises.writeFile(path.join(__dirname, "errors.json"), JSON.stringify(errors));
  console.log({ errors });
}

run();
