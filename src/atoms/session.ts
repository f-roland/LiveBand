import { atom } from "jotai";

export const sessionAtom = atom<Session>({ id: 1, created_at: "", name: "Poney Vibrant", active: false });
