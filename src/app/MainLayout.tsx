import React, { ReactElement } from 'react';

interface Props {
  children: ReactElement | Array<ReactElement>;
  header?: ReactElement;
  footer?: ReactElement;
}
export function MainLayout({ children, header, footer }: Props) {
  return (
    <div className='h-full flex flex-col'>
      <header>{header}</header>
      <main className='flex flex-col h-full w-full'>{children}</main>
      <footer>{footer}</footer>
    </div>
  );
}
