import { ReactElement } from "react";
import { MainLayout } from "./MainLayout";
import "@/styles/globals.scss";

interface Props {
  children: ReactElement;
}

export default function RootLayout({ children }: Props) {
  return (
    <html className="h-full" lang="en">
      <body className="h-full w-full bg-white bg-contain bg-fixed bg-no-repeat bg-bottom p-5">
        {children}
      </body>
    </html>
  );
}
