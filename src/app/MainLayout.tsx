import React, { ReactElement } from "react";

interface Props {
  children: ReactElement | Array<ReactElement>;
  header?: ReactElement;
  footer?: ReactElement;
}
export function MainLayout({ children, header, footer }: Props) {
  return (
    <div className="h-full">
      <header>{header}</header>
      <main className="flex flex-col items-center w-full">{children}</main>
      <footer>{footer}</footer>
    </div>
  );
}
