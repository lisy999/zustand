import React, { useRef } from "react";
import { useSprings, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import clamp from "lodash.clamp";
import swap from "lodash-move";
import styles from "./styles.module.css";

const fn =
  (order: number[], active = false, originalIndex = 0, curIndex = 0, y = 0) =>
  (index: number) =>
    active && index === originalIndex
      ? {
          y: curIndex * 50 + y,
          scale: 1.1,
          zIndex: 1,
          shadow: 15,
          immediate: (key: string) => key === "y" || key === "zIndex",
        }
      : {
          y: order.indexOf(index) * 50,
          scale: 1,
          zIndex: 0,
          shadow: 1,
          immediate: false,
        };

function DraggableList({ items }: { items: string[] }) {
  const order = useRef(items.map((_, index) => index)); // 存储索引作为本地引用，代表项目顺序
  const [springs, api] = useSprings(items.length, fn(order.current)); // 创建弹簧，每个对应一个项目，控制其变换、缩放等
  const bind = useDrag(({ args: [originalIndex], active, movement: [, y] }) => {
    const curIndex = order.current.indexOf(originalIndex);
    const curRow = clamp(
      Math.round((curIndex * 100 + y) / 100),
      0,
      items.length - 1
    );
    const newOrder = swap(order.current, curIndex, curRow);
    api.start(fn(newOrder, active, originalIndex, curIndex, y)); // 提供弹簧新样式数据，它们会动画化视图而不引起单次渲染
    if (!active) order.current = newOrder;
  });
  return (
    <div className={styles.content} style={{ height: items.length * 50 }}>
      {springs.map(({ zIndex, shadow, y, scale }, i) => (
        <animated.div
          {...bind(i)}
          key={i}
          style={{
            zIndex,
            boxShadow: shadow.to(
              (s) => `rgba(0, 0, 0, 0.15) 0px ${s}px ${2 * s}px 0px`
            ),
            y,
            scale,
          }}
        >
          {items[i]}
        </animated.div>
      ))}
    </div>
  );
}

export default function App() {
  return (
    <div className={styles.container}>
      <DraggableList items={"Lorem ipsum dolor sit".split(" ")} />
    </div>
  );
}
