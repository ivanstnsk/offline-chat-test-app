import * as yup from "yup";

export interface SignInProps {
  id?: string;
  className?: string;
}

export interface Inputs {
  username: string;
}

export const schema = yup
  .object({
    username: yup
      .string()
      .required()
      .min(8)
      .max(12)
      .matches(
        /^[a-zA-Z0-9_]+$/,
        "Username can only contain letters, numbers and underscores"
      ),
  })
  .required();
