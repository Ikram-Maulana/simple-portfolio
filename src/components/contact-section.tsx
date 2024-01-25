"use client";

import { useHover, useMouse } from "@mantine/hooks";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Tokens } from "mirrorful/.mirrorful/theme";
import SectionHeader from "./section-header";

export default function ContactSection() {
  const { hovered, ref: refHovered } = useHover();
  const { ref, x, y } = useMouse({ resetOnExit: false });
  const [contactFollowStyle, setContactFollowStyle] = useState({});

  const f = 0.05;

  useEffect(() => {
    const contactContainer = document.getElementById("anchor");
    const contactFollow = document.querySelector(".follow");

    if (!contactContainer || !contactFollow) return;

    const contactContainerRect = contactContainer.getBoundingClientRect();
    const conBtnX = contactContainerRect.left;
    const conBtnY = contactContainerRect.top;
    const contactContainerH = contactContainerRect.height;
    const contactContainerW = contactContainerRect.width;

    const newStyle = {
      transform:
        x === 0
          ? "0"
          : `translate(${
              (x - conBtnX - contactContainerW / 2) * f
            }px, y === 0 ? "0" : ${
              (y - conBtnY - contactContainerH / 2) * f
            }px)`,
      top: y === 0 ? "0" : `${(y - conBtnY - contactContainerH / 2) * f}px`,
      left: y === 0 ? "0" : `${(x - conBtnX - contactContainerW / 2) * f}px`,
    };

    setContactFollowStyle(newStyle);
  }, [x, y]);

  return (
    <section id="contact" className="pb-40 pt-36 lg:pt-52" ref={ref}>
      <div className="container max-w-sm md:max-w-2xl lg:max-w-5xl">
        <div className="grid items-center grid-rows-1 justify-items-center gap-28 md:px-8">
          <SectionHeader
            title="Contact"
            description="Don't be shy, let's have a chat with me 🖐️"
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
                  ...contactFollowStyle,
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
