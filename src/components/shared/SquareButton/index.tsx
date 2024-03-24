import Image from "next/image";
import { Button } from "../Button";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { classnames } from "@/utils";
import { ReactElement } from "react";

interface Props {
  topIcon: string | StaticImport;
  size?: keyof typeof BUTTON_SIZE;
  onClick: () => void;
  disabled?: boolean;
  title: string;
}

const BUTTON_SIZE = {
  DEFAULT: "DEFAULT",
  SMALL: "SMALL",
};
export function SquareButton({
  topIcon,
  size = "DEFAULT",
  onClick,
  disabled,
  title,
}: Props) {
  return (
    <div
      onClick={!disabled ? onClick : undefined}
      className={classnames(
        "relative flex flex-col items-center justify-center border border-slate-300 rounded-md bg-gray-50",
        {
          "w-24 h-24": size === BUTTON_SIZE.DEFAULT,
          "w-12 h-12": size === BUTTON_SIZE.SMALL,
          "hover:bg-teal-600 transition-colors duration-300": !disabled,
        }
      )}
    >
      {disabled && (
        <div className="absolute bg-slate-100 bg-opacity-80 w-full h-full p-1" />
      )}
      <Image alt="CarLogo" width={40} height={40} src={topIcon} />
      <Button
        disabled={disabled}
        buttonType="SMALL"
        shape="textOnly"
        textSize="text-sm"
      >
        {title}
      </Button>
    </div>
  );
}
