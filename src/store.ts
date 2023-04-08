import { atom, useAtom } from "jotai";

const dressAtom = atom("green");

const cartAtom = atom<string[]>([]);

export const useDress = () => useAtom(dressAtom);

export const useCart = () => useAtom(cartAtom);
