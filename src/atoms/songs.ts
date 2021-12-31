import { atom } from "jotai";

export const songsAtom = atom<Song[]>([]);

export const currentSong = atom<Song>(null);
