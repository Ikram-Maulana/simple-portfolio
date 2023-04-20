import { useLockBody } from "@/hooks/use-lock-body";
import { cn } from "@/lib/utils";
import { MobileNavProps } from "@/types";
import Link from "next/link";
import { Separator } from "./ui/separator";

export default function MobileNav({ items, children }: MobileNavProps) {
  useLockBody();

  return (
    <div
      className={cn(
        "fixed inset-0 top-[72px] z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto py-6 px-12 pb-32 shadow-md animate-in slide-in-from-bottom-80 md:hidden"
      )}
    >
      <div className="relative z-20 grid gap-6 p-4 bg-white rounded-md shadow-md">
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
            href="#"
            className={cn(
              "flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline"
            )}
          >
            Resume
          </Link>
        </nav>
        {children}
      </div>
    </div>
  );
}
