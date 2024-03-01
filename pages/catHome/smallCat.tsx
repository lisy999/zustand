import React from "react";
import { useCatStore } from "@/store/catStore";
import { Button } from "antd";
import { shallow } from "zustand/shallow";
export default function SmallCat() {
  //使用选择器 不渲染其他东西
  // const increaseBigCats = useCatStore.use.increaseBigCats();
  //使用shallow 浅函数
  // const { increaseBigCats } = useCatStore(
  //   (state) => ({
  //     increaseBigCats: state.increaseBigCats,
  //   }),
  //   shallow
  // );

  const [increaseBigCats] = useCatStore(
    (state) => [state.increaseBigCats],
    shallow
  );
  return (
    <>
      <h1>小猫</h1>
      <Button onClick={() => increaseBigCats(2)}>增加大猫</Button>
      {Math.random()}
    </>
  );
}
