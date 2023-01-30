import Link from "next/link";

const headers = (
  <header>
    <Link href={"/"}>
      <h1 className="text-3xl font-bold italic">Storyland</h1>
    </Link>
    <br />
  </header>
);
const footer = (
  <footer>
    <div>
      <br />
      <h3>Developed by Alex</h3>
    </div>
  </footer>
);
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head />
      <body>
        {headers}
        {children}
        {footer}
      </body>
    </html>
  );
}
