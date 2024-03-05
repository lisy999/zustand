import React from "react";
import dynamic from "next/dynamic";
import { Flex } from "antd";
const Fish = dynamic(import("./Fish"), {
  ssr: false,
});
const Cat = dynamic(import("./Cat"), {
  ssr: false,
});
export default function FishAndCat() {
  return (
    <Flex gap={200}>
      <Cat />
      <Fish />
    </Flex>
  );
}
