import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type TCatStoreState = {
  cats: {
    bigCats: number;
    smallCats: number;
  };
  increaseBigCats: (v: number) => void;
  increaseSmallCats: () => void;
};

export const useCatStore = create<TCatStoreState>()(
  immer((set) => ({
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
  }))
);

// const useCatStore = (set: StoreApi<TCatStoreState>["setState"]) => ({
//   cats: {
//     bigCats: 0,
//     smallCats: 0,
//   },

//   increaseBigCats: () =>
//     set((state) => ({
//       cats: {
//         ...state.cats,
//         bigCats: state.cats.bigCats + 1,
//       },
//     })),
//   increaseSmallCats: () =>
//     set((state) => ({
//       cats: {
//         ...state.cats,
//         smallCats: state.cats.smallCats + 1,
//       },
//     })),
// });

// export default useCatStore;
