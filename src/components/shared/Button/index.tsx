import { classnames } from "@/utils";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { ReactElement } from "react";

interface Props {
  children?: string | ReactElement;
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
  shape?: "filled" | "outlined" | "textOnly";
  textSize?: "text-base" | "text-lg" | "text-sm";
  buttonType?: keyof typeof BUTTON_TYPE;
  leftIcon?: string | StaticImport;
  rightIcon?: string | StaticImport;
}

const BUTTON_TYPE = {
  DEFAULT: "DEFAULT",
  SMALL: "SMALL",
  CIRCLE: "CIRCLE",
} as const;

export function Button({
  children,
  onClick,
  type = "button",
  shape = "filled",
  textSize = "text-base",
  buttonType = BUTTON_TYPE.DEFAULT,
  leftIcon,
  rightIcon,
}: Props) {
  return (
    <button
      className={classnames(
        "flex items-center justify-center relative rounded-full",
        textSize,
        {
          "bg-teal-500 text-white": shape === "filled",
          " border border-teal-500 text-teal-500": shape === "outlined",
          "w-28 h-10": buttonType === BUTTON_TYPE.DEFAULT,
          "w-20 h-10": buttonType === BUTTON_TYPE.SMALL,
          "w-10 h-10": buttonType == BUTTON_TYPE.CIRCLE,
        }
      )}
      type={type}
      onClick={onClick}
    >
      {leftIcon && (
        <Image
          className="absolute left-0 ml-1 mt-0.5"
          src={leftIcon}
          alt="arrowLeft"
          width={10}
          height={10}
        />
      )}
      {children}
      {rightIcon && (
        <Image
          className="absolute right-0 mr-1 mt-0.5"
          src={rightIcon}
          alt="arrowLeft"
          width={10}
          height={10}
        />
      )}
    </button>
  );
}
