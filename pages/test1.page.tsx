import React from "react";
import useStore from "@/store";
import { Button, Space } from "antd";
export default function Test1() {
  const {
    cats: { bigCats, smallCats },
    increaseBigCats,
    increaseSmallCats,
  } = useStore();
  return (
    <>
      <Space>
        <span>
          bigCats:
          {bigCats}
        </span>
        <Button onClick={() => increaseBigCats()}>增加</Button>
      </Space>

      <Space>
        <span>
          smallCats:
          {smallCats}
        </span>
        <Button onClick={() => increaseSmallCats()}>增加</Button>
      </Space>
    </>
  );
}
