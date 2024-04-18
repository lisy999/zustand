import React, { useState, useEffect } from "react";
export default function Index() {
  const [windowSize, setWindowSize] = useState({
    width: 100,
    height: 50,
  });
  function handleResize() {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
      }}
    >
      <svg
        viewBox={`0 0 ${windowSize.width} ${windowSize.height}`} // 设置 SVG 视口大小为屏幕尺寸
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      >
        <rect
          x="0"
          y="0"
          width={windowSize.width}
          height={windowSize.height}
          fill="skyblue"
        />{" "}
      </svg>
    </div>
  );
}
