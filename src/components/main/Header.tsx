import React from "react";
interface Props {
  title: string;
}
export function Header({ title }: Props) {
  return <div>{title}</div>;
}
