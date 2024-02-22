import React from "react";
import { Button, Space } from "antd";
import { useCatStore } from "@/store/catStore";
export default function Test1() {
  const {
    cats: { bigCats, smallCats },
    increaseBigCats,
    increaseSmallCats,
  } = useCatStore();
  return (
    <>
      <Space>
        <span>
          bigCats:
          {bigCats}
        </span>
        <Button onClick={() => increaseBigCats(2)}>增加</Button>
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
