/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useHover, useMouse } from "@mantine/hooks";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { Tokens } from "../../mirrorful/.mirrorful/theme";
import SectionHeader from "./section-header";

export default function ContactSection() {
  const { hovered, ref: refHovered } = useHover();
  const { ref, x, y } = useMouse({ resetOnExit: true });
  const contactFollow = document.querySelector(".follow");
  const contactContainer = document.getElementById("anchor");
  const contactContainerH = contactContainer?.getBoundingClientRect().height;
  const contactContainerW = contactContainer?.getBoundingClientRect().width;
  const f = 0.05;

  useEffect(() => {
    let conBtnX = contactContainer?.getBoundingClientRect().left;
    let conBtnY = contactContainer?.getBoundingClientRect().top;

    if (
      conBtnX &&
      conBtnY &&
      contactContainerH &&
      contactContainerW &&
      contactContainer &&
      contactFollow
    ) {
      (contactFollow as HTMLElement).style.transform =
        x === 0
          ? "0"
          : `translate(${
              (x - conBtnX - contactContainerW / 2) * f
            }px, y === 0 ? "0" : ${
              (y - conBtnY - contactContainerH / 2) * f
            }px)`;
      (contactFollow as HTMLElement).style.top =
        y === 0 ? "0" : `${(y - conBtnY - contactContainerH / 2) * f}px`;
      (contactFollow as HTMLElement).style.left =
        y === 0 ? "0" : `${(x - conBtnX - contactContainerW / 2) * f}px`;
    }
  }, [x, y, contactContainerH, contactContainerW]);

  return (
    <section id="contact" className="pb-40 pt-36 lg:pt-52" ref={ref}>
      <div className="container max-w-sm md:max-w-2xl lg:max-w-5xl">
        <div className="grid items-center grid-rows-1 justify-items-center gap-28 md:px-8">
          <SectionHeader
            title="Contact"
            description="Don’t be shy, let’s have a chat with me 🖐️"
          />

          <Link href="mailto:ikram_maulana@onedrive.web.id">
            <div className="relative cursor-pointer" ref={refHovered}>
              <div
                id="anchor"
                className="flex items-center justify-center rounded-full h-36 w-36 outline-dashed outline-2"
                style={{
                  outlineColor: Tokens.colors["fire-opal"]["base"],
                }}
              ></div>
              <div
                className="absolute top-0 flex items-center justify-center transition-all ease-out rounded-full follow h-36 w-36 outline outline-2"
                style={{
                  backgroundColor: Tokens.colors["fire-opal"]["base"],
                }}
              >
                <Image
                  src="/images/contact-text.webp"
                  width={120}
                  height={120}
                  alt="Contact Me"
                  className="animate-spin-slow"
                  style={{
                    height: "auto",
                    width: "auto",
                  }}
                />
                <div className="absolute text-2xl">{hovered ? "🖐️" : "✊"}</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
