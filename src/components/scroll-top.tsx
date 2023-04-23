"use client";

import ScrollToTop from "react-scroll-to-top";
import { Tokens } from "../../mirrorful/.mirrorful/theme";

export default function ScrollTop() {
  return (
    <ScrollToTop
      smooth
      className="flex items-center justify-center p-3 outline outline-1"
      style={{
        backgroundColor: Tokens.colors["old-lace"]["base"],
      }}
    />
  );
}
