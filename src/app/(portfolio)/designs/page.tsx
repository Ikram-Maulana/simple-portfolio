import DesignCard from "@/components/design-card";
import prisma from "@/lib/prisma";
import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";
import { Tokens } from "mirrorful/.mirrorful/theme";

const getDesigns = async () => {
  "useServer";
  noStore();

  try {
    const designs = await prisma.designs.findMany();

    return designs;
  } catch (error) {
    return [];
  }
};

export default async function Designs() {
  const designs = await getDesigns();

  return (
    <main>
      {/* Designs Section */}
      <section id="projects" className="pb-16 pt-36">
        <div className="container max-w-sm md:max-w-2xl lg:max-w-5xl">
          <div className="grid items-center grid-rows-1 gap-11 md:px-8">
            <div>
              <h1 className="text-2xl font-extrabold tracking-tight transition-colors scroll-m-20 first:mt-0 text-tprimary font-montserrat">
                Designs
              </h1>
              <p className="leading-7 [&:not(:first-child)]:mt-2 text-tprimary/60">
                I have created various impressive designs for different apps
                using my skills and experience. Enough said. Let&apos;s have the
                pictures do the talking.
              </p>
            </div>

            <div className="grid items-start grid-cols-1 gap-8 md:grid-cols-2">
              {designs.length > 0 ? (
                designs.map((design) => (
                  <DesignCard key={design.uuid} item={design} />
                ))
              ) : (
                <div
                  className="w-full col-span-2 p-5 rounded-lg justify-items-center lg:p-6"
                  style={{
                    backgroundColor: Tokens.colors["fire-opal"]["base"],
                  }}
                >
                  <h4 className="text-center text-white">
                    No design yet, please check back later
                  </h4>
                </div>
              )}
            </div>

            {designs.length > 0 && (
              <small className="text-sm font-medium leading-7 text-center">
                Hey, hey, hey... I&apos;ve got even more on{" "}
                <Link
                  href="https://dribbble.com/ikram_maulana"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: Tokens.colors["fire-opal"]["base"],
                  }}
                >
                  My Dribbble!
                </Link>
              </small>
            )}
          </div>
        </div>
      </section>
      {/* End Projects Section */}
    </main>
  );
}
