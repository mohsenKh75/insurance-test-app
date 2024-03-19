import React, { ReactElement } from "react";

interface Props {
  children: ReactElement | Array<ReactElement>;
  header?: ReactElement;
  footer?: ReactElement;
}
export function MainLayout({ children, header, footer }: Props) {
  return (
    <div className="flex flex-col w-full h-full">
      <header>{header}</header>
      <main className="w-full self-center">{children}</main>
      <footer>{footer}</footer>
    </div>
  );
}
