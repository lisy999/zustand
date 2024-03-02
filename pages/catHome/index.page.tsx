import React from "react";
// import BigCatsAndSmallCats from "./bigCatsAndSmallCats";
import dynamic from "next/dynamic";
const BigCatsAndSmallCats = dynamic(import("./BigCatsAndSmallCats"), {
  ssr: false,
});
const SmallCat = dynamic(import("./smallCat"), {
  ssr: false,
});
export default function CatHome() {
  return (
    <div className="flex flex-col gap-2">
      <BigCatsAndSmallCats />
      <SmallCat />
    </div>
  );
}
