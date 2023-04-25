import { Skeleton } from "@/components/ui/skeleton";
import { Tokens } from "../../../../mirrorful/.mirrorful/theme";

export default function LoadingSkeleton() {
  return (
    <div className="grid items-start grid-cols-1 gap-8 md:grid-cols-2">
      <Skeleton
        className="w-full h-full rounded-lg"
        style={{
          backgroundColor: Tokens.colors["pearl-bush"]["base"],
        }}
      />
    </div>
  );
}