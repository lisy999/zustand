import React from "react";
import { useCatStore } from "@/store/catStore";
import { Button } from "antd";
export default function SmallCat() {
  //使用选择器 不渲染其他东西
  const increaseBigCats = useCatStore.use.increaseBigCats();
  return (
    <>
      <h1>小猫</h1>
      <Button onClick={() => increaseBigCats(2)}>增加大猫</Button>
      {Math.random()}
    </>
  );
}
