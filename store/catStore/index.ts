import { createSelectors } from "@/utils/createSelectors";
// import { create } from "zustand";
import { createWithEqualityFn } from "zustand/traditional";

import { immer } from "zustand/middleware/immer";
import { createJSONStorage, persist } from "zustand/middleware";
type TCatStoreState = {
  cats: {
    bigCats: number;
    smallCats: number;
  };
  testCat: number;
  testCat2: number;
  increaseBigCats: (v: number) => void;
  increaseSmallCats: () => void;
  summary: () => void;
  //重置
  reset: () => void;
};

export const useCatStore = createSelectors(
  createWithEqualityFn<TCatStoreState>()(
    //immer:可改变函数
    immer(
      //persist:持久中间件 本地存储
      persist(
        (set, get) => ({
          cats: {
            bigCats: 0,
            smallCats: 0,
          },
          testCat: 1,
          testCat2: 2,
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
          reset: () => {
            set((state) => {
              state.cats.smallCats = 0;
              state.cats.bigCats = 0;
            });
          },
        }),
        {
          // 参数 ：
          // name:唯一标识
          name: "catStore",
          storage: createJSONStorage(() => sessionStorage),
          //partialze:可以隐藏不需要存储到本地存储的数据
          partialize: (state) =>
            Object.fromEntries(
              //这里写的["testCat", "testCat2"]那么对应的state数据将被隐藏
              Object.entries(state).filter(
                ([key]) => !["testCat", "testCat2"].includes(key)
              )
            ),
        }
      )
    )
  )
);
