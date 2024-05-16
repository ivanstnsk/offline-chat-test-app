import { FC } from "react";

import s from "./MainButton.module.scss";
import { MainButtonProps } from "./MainButton.types.ts";

const MainButton: FC<MainButtonProps> = ({
  id,
  className,
  children,
  type,
  onClick,
}) => {
  return (
    <button
      id={id}
      className={`${s.MainButton} ${className}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default MainButton;
