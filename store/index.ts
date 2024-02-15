//切片页面
import { create } from "zustand";
import CatStore from "./catStore";
type allType = ReturnType<typeof CatStore>;
const useStore = create<allType>()((set) => {
  return {
    ...CatStore(set),
  };
});
export default useStore;
