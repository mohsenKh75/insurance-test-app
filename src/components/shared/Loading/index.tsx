import { classnames } from "@/utils";

import styles from "./Loading.module.scss";

interface Props {
  isFullScreen?: boolean;
}

export function Loading({ isFullScreen }: Props) {
  const componentClassName = classnames(
    "flex justify-center items-center space-x-1",
    {
      "w-full h-full": isFullScreen,
    },
    styles.Loading
  );
  const itemClassName = classnames(
    styles.Loading__circle,
    "bg-teal-600 rounded-full h-[6px] w-[6px] my-0"
  );
  return (
    <div className={componentClassName}>
      <div className={itemClassName} />
      <div className={itemClassName} />
      <div className={itemClassName} />
    </div>
  );
}
