import { ImageScrollProps } from "@/types";
import emojiRegex from "emoji-regex";
import Link from "next/link";

export default function ImageScroll({
  name,
  imageUrl,
  demoUrl,
}: ImageScrollProps) {
  // remove all emoji from name
  const regex = emojiRegex();
  let cleanName = name.replace(regex, "");
  // delete spaces from name
  cleanName = cleanName.replace(/\s/g, "");

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
        aria-label={`Go to ${cleanName} Demo Link`}
      ></div>
    </Link>
  );
}
