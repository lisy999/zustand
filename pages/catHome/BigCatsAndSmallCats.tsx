import React from "react";
import { Button, Space } from "antd";
import { useCatStore } from "@/store/catStore";
export default function BigCatsAndSmallCats() {
  const {
    cats: { bigCats, smallCats },
    increaseBigCats,
    increaseSmallCats,
    summary,
  } = useCatStore();
  return (
    <>
      <h1>大猫小猫</h1>
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
      {summary()}
      <>{Math.random()}</>
    </>
  );
}
