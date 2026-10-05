// @ts-nocheck
import React from "react";

export default function HighlightBox({ children }) {
  return (
    <div
      className="relative inline-block z-0 mt-0 mb-0"
      style={{ marginTop: "0px", marginBottom: "0px" }}
    >
      <p
        className="z-10 p-0 leading-0"
        style={{ marginTop: "0px", marginBottom: "0px" }}
      >
        {children}
      </p>
      <div
        className="absolute bottom-0 left-0 right-0 mt-10 h-2 inline-block bg-[#c3f53b]/40 dark:bg-[#c3f53b]/60"
        style={{ zIndex: -10 }}
      ></div>
    </div>
  );
}
