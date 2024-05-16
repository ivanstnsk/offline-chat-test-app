import { useCallback } from "react";

export interface Inputs {
  username: string;
}

const useSignIn = () => {
  const handleSubmit = useCallback((inputs: Inputs) => {
    console.log(inputs);
  }, []);

  return {
    onSubmit: handleSubmit,
  };
};

export default useSignIn;
