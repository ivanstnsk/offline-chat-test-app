import { ReactNode } from "react";

export interface MainButtonProps {
  id?: string;
  className?: string;
  children?: ReactNode;
  type: "submit" | "reset" | "button" | undefined;
  onClick?: () => void;
}
