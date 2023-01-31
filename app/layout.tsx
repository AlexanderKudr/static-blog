import Link from "next/link";

const headers = (
  <header className="mt-2">
    <Link href={"/"}>
      <h1 className="text-3xl font-bold italic text-gray-100 text-center">Storyland</h1>
    </Link>
    <br />
  </header>
);
const footer = (
  <footer>
    <div>
      <br />
      <h3 className="text-white text-center">Developed by Alex</h3>
    </div>
  </footer>
);
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head />
      <body className="p-10 bg-[url('/images/bg.jpeg')] bg-cover bg-no-repeat">
        {headers}
        {children}
        {footer}
      </body>
    </html>
  );
}
