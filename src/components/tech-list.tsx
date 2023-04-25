import { TechListProps } from "@/types";
import Image from "next/image";
import { Tokens } from "../../mirrorful/.mirrorful/theme";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../components/ui/tooltip";

export default function TechList({ items }: TechListProps) {
  return (
    <>
      {items?.length ? (
        <div className="flex justify-center items-center flex-wrap gap-6">
          {items.map((item, index) => (
            <TooltipProvider key={index}>
              <Tooltip>
                <TooltipTrigger
                  className="p-4 lg:p-6 rounded-lg max-w-[72px] max-h-[72px] md:max-w-[80px] md:max-h-[80px] lg:max-w-[96px] lg:max-h-[96px] hover:shadow-md"
                  style={{
                    backgroundColor: Tokens.colors["pearl-bush"]["base"],
                  }}
                >
                  <Image
                    src={item.image}
                    width="100"
                    height="100"
                    alt={item.name}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      ) : null}
    </>
  );
}
