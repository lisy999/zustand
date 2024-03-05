import { useFoodStore } from "@/store/fishStore/idnex";
import { Button } from "antd";
import React from "react";

export default function Fish() {
  const { fish, addOneFish, removeOneFish, removeAllFish } = useFoodStore();

  return (
    <div>
      {" "}
      <div style={{ width: 300, height: 300, background: "blue" }}>
        <h1>fish:{fish}</h1>
        <Button onClick={addOneFish}>add one fish</Button>
        <Button onClick={removeOneFish}>remove one fish</Button>
        <Button onClick={removeAllFish}>remove all fish</Button>
      </div>
    </div>
  );
}
