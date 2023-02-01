import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";

const navbar = (
  <nav className="mt-2">
    <Link href={"/"}>
      <h1 className="text-3xl font-bold italic text-gray-100 text-center">Storyland</h1>
    </Link>
    <br />
  </nav>
);
const footer = (
  <footer className="flex justify-center top-0">
    <div className="inline-block">
      <br />
      <h3 className=" mb-2 text-white text-center">Developed by Alex</h3>
      <a
        className="inline-block flex"
        href="https://github.com/AlexanderKudr"
        rel="noreferrer"
        target={"_blank"}
      >
        <AiFillGithub
          size={36}
          className="cursor-pointer mx-auto  text-blue-200 transtition duration-300 hover:text-blue-400"
        />
      </a>
    </div>
  </footer>
);
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head />
      <body className="p-10 bg-[url('/images/bg.jpeg')] bg-cover bg-no-repeat">
        {navbar}
        {children}
        {footer}
      </body>
    </html>
  );
}
