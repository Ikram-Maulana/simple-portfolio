"use client";

import { SocialListProps } from "@/types";
import { useHover } from "@mantine/hooks";
import { Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import { Tokens } from "../../mirrorful/.mirrorful/theme";

export default function SocialList({ items }: SocialListProps) {
  const { hovered, ref } = useHover();

  return (
    <>
      {items?.length ? (
        <ul className="flex items-center justify-center mt-8 space-x-6 md:justify-start">
          {items.map((item, index) => (
            <div key={index} ref={ref}>
              <li>
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 transition-all duration-300 rounded-sm shadow-md hover:bg-[#E4DCCF]"
                >
                  {item.name === "Linkedin" ? (
                    <Linkedin className="w-5 h-5 text-tprimary" />
                  ) : item.name === "Github" ? (
                    <Github className="w-5 h-5 text-tprimary" />
                  ) : item.name === "Instagram" ? (
                    <Instagram className="w-5 h-5 text-tprimary" />
                  ) : null}
                </Link>
              </li>
            </div>
          ))}
        </ul>
      ) : null}
    </>
  );
}
