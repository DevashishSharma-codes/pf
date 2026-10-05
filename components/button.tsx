// @ts-nocheck
import React from "react";

export default function Button({ text, url }) {
  return (
    <a
      href={url}
      style={{ color: "#f7f7f5", textDecoration: "none" }}
      className="mr-2 inline-block rounded-md px-6 py-3 bg-[#232d24] text-[#f7f7f5] text-sm border border-white/10 hover:border-[#e84c3d]/40 hover:bg-[#2a362b] transition-colors"
    >
      {text}
    </a>
  );
}
