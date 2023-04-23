import { ContactCircleProps } from "@/types";
import { useHover } from "@mantine/hooks";
import Image from "next/image";
import { Tokens } from "../../mirrorful/.mirrorful/theme";
import Link from "next/link";

export default function ContactCircle({
  to,
  className,
  style,
}: ContactCircleProps) {
  const { hovered, ref } = useHover();

  return (
    <Link href={to}>
      <div
        className="relative transition-all cursor-pointer"
        style={style}
        ref={ref}
      >
        <div
          id="anchor"
          className="flex items-center justify-center rounded-full h-36 w-36 outline-dashed outline-2"
          style={{
            outlineColor: Tokens.colors["fire-opal"]["base"],
          }}
        ></div>
        <div
          className={`${className} absolute h-36 w-36 rounded-full flex items-center justify-center outline outline-2 top-0`}
          style={{
            ...style,
            backgroundColor: Tokens.colors["fire-opal"]["base"],
          }}
        >
          <Image
            src="/images/contact-text.png"
            width={120}
            height={120}
            alt="Contact Me"
            className="animate-spin-slow"
          />
          <div className="absolute text-2xl">{hovered ? "🖐️" : "✊"}</div>
        </div>
      </div>
    </Link>
  );
}
