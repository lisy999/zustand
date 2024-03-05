import { useFoodStore } from "@/store/fishStore/idnex";
import React, { useEffect, useState } from "react";
import { shallow } from "zustand/shallow";

export default function Cat() {
  const [bgColor, setBgColor] = useState<"lightgreen" | "red" | undefined>(
    undefined
  );
  const style = {
    width: 100,
    height: 100,
    background: bgColor,
  };
  useEffect(() => {
    //参数1：返回的参数   参数二：值和之前的值 参数三:使用shallow和立即开火
    const unsub = useFoodStore.subscribe(
      (state) => state.fish,
      (fish, preFish) => {
        //此处设置了fireImmediately所以初始化可以加载
        if (fish == preFish) {
          if (fish <= 5) {
            setBgColor("lightgreen");
          } else {
            setBgColor("red");
          }
        }
        //此处设置了fireImmediately所以初始化可以加载

        if (preFish <= 5 && fish > 5) {
          setBgColor("lightgreen");
        } else if (preFish > 5 && fish <= 5) {
          setBgColor("red");
        }
      },
      {
        //相等函数 相当于使用shallow
        equalityFn: shallow,
        //立即开火  立即使用
        fireImmediately: true,
      }
    );
    return unsub;
  }, []);
  return (
    <div style={style}>
      bear <>{Math.random()}</>
    </div>
  );
}
