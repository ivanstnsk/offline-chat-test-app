import { FC } from "react";

import s from "./Container.module.scss";
import { ContainerProps } from "./Container.types.ts";

const Container: FC<ContainerProps> = ({ id, className, children }) => {
  return (
    <div id={id} className={`${s.Container} ${className ?? ""}`}>
      {children}
    </div>
  );
};

export default Container;
