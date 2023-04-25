import { SectionHeaderProps } from "@/types";
import { Tokens } from "../../mirrorful/.mirrorful/theme";

export default function SectionHeader({
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <p
        className="text-lg font-bold"
        style={{ color: Tokens.colors["fire-opal"]["base"] }}
      >
        {title}
      </p>
      <h2 className="scroll-m-20 text-2xl font-extrabold tracking-tight transition-colors first:mt-0 text-tprimary font-montserrat">
        {description}
      </h2>
    </div>
  );
}
