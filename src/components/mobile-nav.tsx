import { useLockBody } from "@/hooks/use-lock-body";
import { cn } from "@/lib/utils";
import { MobileNavProps } from "@/types";
import Link from "next/link";
import { Tokens } from "../../mirrorful/.mirrorful/theme";
import { Separator } from "./ui/separator";

export default function MobileNav({ items, children }: MobileNavProps) {
  useLockBody();

  return (
    <div
      className={cn(
        "fixed inset-0 top-[72px] z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto py-6 max-w-sm mx-auto px-8 pb-32 animate-in slide-in-from-bottom-80 md:hidden"
      )}
    >
      <div
        className="relative z-20 grid gap-6 p-4 rounded-md shadow-md outline outline-1"
        style={{
          backgroundColor: Tokens.colors["old-lace"]["base"],
        }}
      >
        <nav className="grid grid-flow-row text-sm auto-rows-max">
          {items.map((item, index) => (
            <Link
              key={index}
              href={
                item.disabled ? "#" : item.href === "/home" ? "/" : item.href
              }
              className={cn(
                "flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline",
                item.disabled && "cursor-not-allowed opacity-60"
              )}
            >
              {item.title}
            </Link>
          ))}
          <div className="py-1">
            <Separator />
          </div>
          <Link
            href="https://drive.google.com/file/d/1K-Y2DcVpoQc6FeUlqMez_Mca8U-DYJr-/view?usp=share_link"
            className={cn(
              "flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline"
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </Link>
        </nav>
        {children}
      </div>
    </div>
  );
}
