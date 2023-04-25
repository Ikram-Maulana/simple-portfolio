"use client";

import { ButtonAccentProps } from "@/types";
import { useHover } from "@mantine/hooks";
import Link from "next/link";
import { Tokens } from "../../mirrorful/.mirrorful/theme";
import { buttonVariants } from "./ui/button";

export default function ButtonAccent({
  children,
  url,
  centered,
  newTab,
  styleNormal,
  styleHover,
}: ButtonAccentProps) {
  const { hovered, ref } = useHover();

  return (
    <div
      ref={ref}
      className={centered ? "flex justify-center items-center" : ""}
    >
      <Link
        className={`${buttonVariants()} ${
          styleHover && styleNormal && "text-tprimary"
        }`}
        style={
          hovered
            ? styleHover
              ? styleHover
              : {
                  backgroundColor: Tokens.colors["fire-opal"]["400"],
                }
            : styleNormal
            ? styleNormal
            : {
                backgroundColor: Tokens.colors["fire-opal"]["base"],
              }
        }
        href={url}
        target={newTab ? "_blank" : "_self"}
        rel={newTab ? "noopener noreferrer" : ""}
      >
        {children}
      </Link>
    </div>
  );
}
