import { SocialListProps } from "@/types";
import { Dribbble, Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function SocialList({ items }: SocialListProps) {
  return (
    <>
      {items?.length ? (
        <ul className="flex items-center justify-center mt-8 space-x-6 md:justify-start">
          {items.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 transition-all duration-300 rounded-sm shadow-md hover:bg-[#E4DCCF]"
                aria-label={`${item.name} Button Link`}
              >
                {item.name === "Linkedin" ? (
                  <Linkedin className="w-5 h-5 text-tprimary" />
                ) : item.name === "Github" ? (
                  <Github className="w-5 h-5 text-tprimary" />
                ) : item.name === "Instagram" ? (
                  <Instagram className="w-5 h-5 text-tprimary" />
                ) : item.name === "Dribbble" ? (
                  <Dribbble className="w-5 h-5 text-tprimary" />
                ) : null}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
}
