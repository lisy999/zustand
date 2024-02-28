import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type TCatStoreState = {
  cats: {
    bigCats: number;
    smallCats: number;
  };
  increaseBigCats: (v: number) => void;
  increaseSmallCats: () => void;
  summary: () => void;
};

export const useCatStore = create<TCatStoreState>()(
  immer((set, get) => ({
    cats: {
      bigCats: 0,
      smallCats: 0,
    },
    increaseBigCats: (v) =>
      set((state) => {
        state.cats.bigCats += v;
      }),
    increaseSmallCats: () =>
      set((state) => {
        state.cats.smallCats += 1;
      }),
    summary: () => {
      const total = get().cats.bigCats + get().cats.smallCats;
      return `共${total}只猫`;
    },
  }))
);
