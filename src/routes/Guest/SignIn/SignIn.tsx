import { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Input from "@/components/ui/Input";
import MainButton from "@/components/ui/Button/MainButton";

import s from "./SignIn.module.scss";
import { Inputs, SignInProps, schema } from "./SignIn.types.ts";
import useSignIn from "@/hooks/useSignIn.ts";

const SignIn: FC<SignInProps> = ({ id, className }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });
  const SignIn = useSignIn();

  return (
    <div id={id} className={`${s.SignIn} ${className ?? ""}`}>
      <h1>Sign in</h1>
      <form onSubmit={handleSubmit(SignIn.onSubmit)}>
        <Input
          placeholder="Username"
          name="username"
          register={register}
          required
        />
        {errors?.username && <p>{errors.username?.message}</p>}
        <MainButton type="submit">SignIn</MainButton>
      </form>
    </div>
  );
};

export default SignIn;
