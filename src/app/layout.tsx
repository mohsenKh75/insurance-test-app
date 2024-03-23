import { ReactElement, Suspense } from "react";
import "@/styles/globals.scss";

interface Props {
  children: ReactElement;
}

export default function RootLayout({ children }: Props) {
  return (
    <html dir="rtl" className="h-full" lang="en">
      <body className="h-full w-full bg-white bg-contain bg-fixed bg-no-repeat bg-bottom p-5">
        <Suspense>{children}</Suspense>
      </body>
    </html>
  );
}
