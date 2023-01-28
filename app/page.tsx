import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen flex flex-col justify-center items-center text-black dark:text-white">
      {/* White Logo */}
      <div className="drop-shadow-md block dark:hidden">
        <Image
          src="/logo.png"
          alt="Ikram Maulana Logo"
          width={75}
          height={75}
          priority
        />
      </div>

      {/* Dark Logo */}
      <div className="drop-shadow-md hidden dark:block">
        <Image
          src="/logo-dark.png"
          alt="Ikram Maulana Logo"
          width={75}
          height={75}
          priority
        />
      </div>

      <div className="flex flex-col items-center max-w-xl lg:max-w-2xl p-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Down for Maintenance 🛠️</h1>
        <p>
          Ikram Maulana&apos;s Portfolio Web is currently undergoing planned
          maintenance. I&apos;ll be back with an better website experience.
          Follow me on{" "}
          <a
            href="https://github.com/Ikram-Maulana"
            target="_blank"
            rel="noreferrer"
            className="font-bold"
          >
            Github
          </a>{" "}
          for updates.
        </p>
      </div>
    </main>
  );
}
