import React from "react";

export default function Loader({ width, radius, dark }) {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center"
      style={{
        backgroundColor: dark ? "rgba(255, 255, 255, 0.65) " : "rgba(0, 0, 0, 0.65)",
      }}
    >
      <span
        className=" animate-spin border-left rounded-full"
        style={{
          borderLeftWidth: width + "px",
          width: radius + "px",
          height: radius + "px",
          borderLeftColor: !dark ? "#ffac3f" : "#fff",
        }}
      ></span>
    </div>
  );
}
