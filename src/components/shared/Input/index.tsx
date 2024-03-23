import { classnames } from "@/utils";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React, {
  DetailedHTMLProps,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
} from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface Props {
  type: HTMLInputTypeAttribute;
  placeholder?: string;
  id: string;
  register: UseFormRegisterReturn;
  error?: string;
  onClick?: () => void;
  inputProps?: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  leftIcon?: string | StaticImport;
}
export function Input({
  type,
  placeholder,
  id,
  register,
  error,
  onClick,
  inputProps,
  leftIcon,
}: Props) {
  return (
    <div className="w-full relative">
      {leftIcon && (
        <Image
          width={12}
          alt="icon"
          src={leftIcon}
          className="absolute left-0 top-3 ml-1"
        />
      )}
      <input
        {...inputProps}
        onClick={onClick}
        dir="rtl"
        {...register}
        type={type}
        placeholder={placeholder}
        id={id}
        className={classnames(
          "border-slate-600 outline-slate-200 outline w-full rounded-sm h-8 px-2",
          { "caret-transparent": inputProps?.readOnly }
        )}
      />
      {error && <p className="text-sm pt-2 text-red-400">*{error}</p>}
    </div>
  );
}
