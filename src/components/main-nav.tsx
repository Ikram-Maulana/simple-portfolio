"use client";

import { cn } from "@/lib/utils";
import { MainNavProps } from "@/types";
import { useHover, useViewportSize, useWindowScroll } from "@mantine/hooks";
import { AlignJustify, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { useEffect, useState } from "react";
import { Tokens } from "../../mirrorful/.mirrorful/theme";
import MobileNav from "./mobile-nav";
import { Button } from "./ui/button";

export default function MainNav({ items, children }: MainNavProps) {
  const segment = useSelectedLayoutSegment();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [scroll] = useWindowScroll();
  const { hovered, ref } = useHover();
  const { width } = useViewportSize();

  useEffect(() => {
    const navbar = document.querySelector("header");
    if (scroll.y > 0) {
      navbar?.classList.remove("absolute", "z-10");
      navbar?.classList.add("navbar-fixed");
    } else {
      navbar?.classList.remove("navbar-fixed");
      navbar?.classList.add("absolute", "z-10");
    }
  }, [scroll.y]);

  useEffect(() => {
    if (width >= 768 && showMobileMenu) {
      setShowMobileMenu(false);
    }
  }, [width, showMobileMenu]);

  return (
    <header className="absolute top-0 left-0 z-10 flex items-center w-full h-20 transition-all bg-transparent font-montserrat">
      <div className="container max-w-sm md:max-w-2xl lg:max-w-5xl">
        <div className="relative flex items-center justify-between">
          <div className="brand">
            <Link
              href="/"
              className="block py-6 text-xl font-bold text-tprimary"
            >
              <Image
                src="/images/avatar.png"
                width={40}
                height={40}
                alt="Logo"
              />
            </Link>
          </div>

          <div className="flex items-center">
            <Button
              className="block px-2 md:hidden"
              variant="outline"
              style={{
                borderColor: Tokens.colors["fire-opal"]["base"],
                backgroundColor: Tokens.colors["fire-opal"][100],
              }}
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              {showMobileMenu ? (
                <X className="w-6 h-6" />
              ) : (
                <AlignJustify className="w-6 h-6" />
              )}
            </Button>

            {items?.length ? (
              <nav className="hidden gap-10 md:flex">
                {items?.map((item, index) => (
                  <Link
                    key={index}
                    href={
                      item.disabled
                        ? "#"
                        : item.href === "/home"
                        ? "/"
                        : item.href
                    }
                    className={cn(
                      "flex items-center text-base font-bold text-tprimary/50 sm:text-sm hover:text-tprimary",
                      item.href.startsWith(
                        `/${segment === null ? "home" : segment}`
                      ) && "text-tprimary",
                      item.disabled && "cursor-not-allowed opacity-30"
                    )}
                  >
                    {item.title}
                  </Link>
                ))}
                <div ref={ref}>
                  <Button
                    style={
                      hovered
                        ? {
                            backgroundColor: Tokens.colors["fire-opal"]["400"],
                          }
                        : {
                            backgroundColor: Tokens.colors["fire-opal"]["base"],
                          }
                    }
                  >
                    Resume
                  </Button>
                </div>
              </nav>
            ) : null}
            {showMobileMenu && <MobileNav items={items}>{children}</MobileNav>}
          </div>
        </div>
      </div>
    </header>
  );
}
