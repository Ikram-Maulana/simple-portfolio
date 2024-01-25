import { Skeleton } from "@/components/ui/skeleton";
import { FC } from "react";

const ContactSkeleton: FC = () => {
  return (
    <section id="contact" className="pb-40 pt-36 lg:pt-52">
      <div className="container max-w-sm md:max-w-2xl lg:max-w-5xl">
        <div className="grid items-center grid-rows-1 justify-items-center gap-28 md:px-8">
          <div className="flex flex-col items-center text-center">
            <Skeleton className="w-[75px] h-[28px] mb-1 bg-gray-300" />
            <Skeleton className="w-[505px] h-[32px] bg-gray-300" />
          </div>

          <Skeleton className="bg-gray-300 rounded-full h-36 w-36" />
        </div>
      </div>
    </section>
  );
};

export default ContactSkeleton;
