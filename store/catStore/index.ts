// catStore.ts
import { StoreApi } from "zustand";
type TCatStoreState = {
  cats: {
    bigCats: number;
    smallCats: number;
  };
  increaseBigCats: () => void;
  increaseSmallCats: () => void;
};
const useCatStore = (set: StoreApi<TCatStoreState>["setState"]) => ({
  cats: {
    bigCats: 0,
    smallCats: 0,
  },

  increaseBigCats: () =>
    set((state) => ({
      cats: {
        ...state.cats,
        bigCats: state.cats.bigCats + 1,
      },
    })),
  increaseSmallCats: () =>
    set((state) => ({
      cats: {
        ...state.cats,
        smallCats: state.cats.smallCats + 1,
      },
    })),
});

export default useCatStore;
