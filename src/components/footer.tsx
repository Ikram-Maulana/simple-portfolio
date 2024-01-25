import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="py-16">
      <div className="container max-w-sm md:max-w-2xl lg:max-w-5xl">
        <p className="text-sm font-medium leading-5 text-center text-zinc-900">
          &copy; {new Date().getFullYear()} | Made with ❤️ by Ikram Maulana
        </p>
      </div>
    </footer>
  );
};

export default Footer;
