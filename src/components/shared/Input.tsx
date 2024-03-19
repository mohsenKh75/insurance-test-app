import React from "react";

interface Props {
  type: string;
  placeholder?: string;
}
export function Input({ type, placeholder }: Props) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="border-slate-600 outline-slate-200 outline w-full rounded-sm h-8 px-2"
    />
  );
}
