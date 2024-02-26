import SectionHeader from "@/components/section-header";
import SocialList from "@/components/social-list";
import TechList from "@/components/tech-list";
import { socialConfig } from "@/config/socials";
import { techConfig } from "@/config/tech";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Suspense } from "react";
import Projects from "./_components/projects";
import ContactSkeleton from "./_components/skeleton/contact-skeleton";
import ProjectsSkeleton from "./_components/skeleton/projects-skeleton";

const ContactSection = dynamic(() => import("@/components/contact-section"), {
  loading: () => <ContactSkeleton />,
});

export default async function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section id="hero" className="pb-16 pt-36 lg:pt-52">
        <div className="container max-w-sm md:max-w-2xl lg:max-w-5xl">
          <div className="grid items-center grid-cols-1 gap-14 lg:grid-cols-2 md:px-8">
            <div className="relative z-0 flex items-center justify-center lg:col-start-2 lg:col-end-3">
              <div
                id="decoration-1"
                className="absolute right-0 z-10 w-1/4 lg:w-1/3 -top-8 md:-top-14 lg:-top-16 h-1/3"
              >
                <Image
                  src="/images/star.webp"
                  width={500}
                  height={500}
                  alt="Star Decoration"
                  priority
                />
              </div>
              <Image
                src="/images/hero.webp"
                width={500}
                height={500}
                alt="Ikram Maulana"
                style={{
                  height: "auto",
                  width: "auto",
                }}
                priority
              />
              <div
                id="decoration-2"
                className="absolute left-0 z-10 w-1/4 lg:-left-6 lg:w-1/3 -bottom-12 md:-bottom-14 lg:-bottom-12 h-1/3"
              >
                <Image
                  src="/images/fan.webp"
                  width={500}
                  height={500}
                  alt="Fan Decoration"
                  priority
                />
              </div>
            </div>

            <div className="flex flex-col items-center justify-center text-center lg:items-start lg:text-start lg:col-start-1 lg:col-end-2 lg:row-start-1">
              <h1 className="text-4xl font-extrabold tracking-tight scroll-m-20 lg:text-5xl font-montserrat text-tprimary">
                Full Stack Web Developer 👋
              </h1>
              <p className="leading-7 [&:not(:first-child)]:mt-4 text-tprimary/60">
                Hi, I’m Ikram Maulana. A passionate Full Stack Web Developer
                based in Sukabumi, Indonesia. 📍
              </p>
              <SocialList items={socialConfig.socials} />
            </div>
          </div>
        </div>
      </section>
      {/* End Hero Section */}

      {/* Tech Stack Section */}
      <section id="tech-stack" className="pb-16 pt-36 lg:pt-52">
        <div className="container max-w-sm md:max-w-2xl lg:max-w-5xl">
          <div className="grid items-center grid-rows-1 gap-14 md:px-8">
            <SectionHeader
              title="Tech Stack"
              description="Dynamic technology choices for dynamic projects 🔥"
            />
            <TechList items={techConfig.techs} />
          </div>
        </div>
      </section>
      {/* End Tech Stack Section */}

      {/* Projects Section */}
      <section id="projects" className="pb-16 pt-36 lg:pt-52">
        <div className="container max-w-sm md:max-w-2xl lg:max-w-5xl">
          <div className="grid items-center grid-rows-1 gap-14 md:px-8">
            <SectionHeader
              title="Projects"
              description="Some of my recent projects 🚀"
            />

            <Suspense fallback={<ProjectsSkeleton />}>
              <Projects />
            </Suspense>
          </div>
        </div>
      </section>
      {/* End Project Section */}

      {/* Contact Section */}
      <ContactSection />
      {/* End Contact Section */}
    </main>
  );
}
