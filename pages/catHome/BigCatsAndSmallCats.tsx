import React from "react";
import { Button, Card, Space } from "antd";
import { useCatStore } from "@/store/catStore";
export default function BigCatsAndSmallCats() {
  const {
    cats: { bigCats, smallCats },
    increaseBigCats,
    increaseSmallCats,
    summary,
  } = useCatStore();
  return (
    <Card className="text-2xl">
      <h1 style={{ color: "red" }}>大猫小猫</h1>
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
    </Card>
  );
}
