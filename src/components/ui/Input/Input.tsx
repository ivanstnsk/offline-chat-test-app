import { FC } from "react";

import s from "./Input.module.scss";
import { InputProps } from "./Input.types.ts";

const Input: FC<InputProps<any>> = ({
  id,
  className,
  placeholder,
  name,
  required,
  register,
}) => {
  return (
    <input
      id={id}
      className={`${s.Input} ${className ?? ""}`}
      placeholder={placeholder}
      {...register(name, { required })}
    />
  );
};

export default Input;
