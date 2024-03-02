import React from "react";
import { useCatStore } from "@/store/catStore";
import { Button, Card, Space } from "antd";
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
  //清空本地存储
  const { clearStorage } = useCatStore.persist;
  const [increaseBigCats, reset] = useCatStore(
    (state) => [state.increaseBigCats, state.reset],
    shallow
  );
  return (
    <Card className="text-2xl">
      <h1 style={{ color: "red" }}>小猫</h1>
      <Space>
        <Button onClick={() => increaseBigCats(2)}>增加大猫</Button>
        <Button
          onClick={() => {
            reset();
            clearStorage();
          }}
        >
          清除catStore本地存储
        </Button>
      </Space>

      {Math.random()}
    </Card>
  );
}
