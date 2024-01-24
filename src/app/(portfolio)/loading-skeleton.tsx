import { Skeleton } from "@/components/ui/skeleton";
import { Tokens } from "../../../mirrorful/.mirrorful/theme";

export default function LoadingSkeleton() {
  return (
    <div className="flex flex-col gap-10">
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className="lg:[&:nth-child(even)>div>.image-project]:col-start-2 lg:[&:nth-child(even)>div>.image-project]:col-end-3 lg:[&:nth-child(even)>div>.text-project]:col-start-1 lg:[&:nth-child(even)>div>.text-project]:col-end-2 lg:[&:nth-child(even)>div>.text-project]:row-start-1 lg:[&:nth-child(even)>div>.text-project]:row-end-2"
        >
          <div
            className="grid w-full grid-cols-1 gap-8 p-5 rounded-lg lg:gap-6 lg:grid-cols-2 justify-items-center lg:p-6"
            style={{
              backgroundColor: Tokens.colors["pearl-bush"]["base"],
            }}
          >
            <Skeleton
              className="w-full cursor-pointer h-52 md:h-[332px] lg:h-[280px]"
              style={{
                backgroundColor: Tokens.colors["old-lace"]["base"],
              }}
            />

            <div className="flex flex-col items-center justify-center w-full text-center text-project lg:items-start lg:justify-start lg:text-start text-tprimary lg:self-center">
              <Skeleton
                className="w-1/2 h-7"
                style={{
                  backgroundColor: Tokens.colors["old-lace"]["base"],
                }}
              />
              <Skeleton
                className="w-full mt-4 mb-2 h-7"
                style={{
                  backgroundColor: Tokens.colors["old-lace"]["base"],
                }}
              />
              <Skeleton
                className="w-full mb-2 h-7"
                style={{
                  backgroundColor: Tokens.colors["old-lace"]["base"],
                }}
              />
              <Skeleton
                className="w-full mb-2 h-7"
                style={{
                  backgroundColor: Tokens.colors["old-lace"]["base"],
                }}
              />
              <Skeleton
                className="w-full h-7"
                style={{
                  backgroundColor: Tokens.colors["old-lace"]["base"],
                }}
              />
              <Skeleton
                className="w-1/4 h-3 mt-3"
                style={{
                  backgroundColor: Tokens.colors["old-lace"]["base"],
                }}
              />
              <div className="flex flex-row gap-2 mt-6">
                <Skeleton
                  className="h-10 w-28"
                  style={{
                    backgroundColor: Tokens.colors["old-lace"]["base"],
                  }}
                />
                <Skeleton
                  className="h-10 w-28"
                  style={{
                    backgroundColor: Tokens.colors["old-lace"]["base"],
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
