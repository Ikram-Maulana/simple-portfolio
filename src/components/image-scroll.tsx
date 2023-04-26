import { ImageScrollProps } from "@/types";
import Link from "next/link";

export default function ImageScroll({
  name,
  imageUrl,
  demoUrl,
}: ImageScrollProps) {
  return (
    <Link
      href={demoUrl}
      className="w-full cursor-pointer h-52 md:h-[332px] lg:h-[280px]"
    >
      <div
        className="w-full h-full transition-all bg-top bg-cover rounded-md hover:bg-bottom"
        style={{
          backgroundImage: `url(${imageUrl})`,
          transitionDuration: "9000ms",
          animationDuration: "9000ms",
        }}
        aria-label={`${name} Go to Demo Link`}
      ></div>
    </Link>
  );
}
