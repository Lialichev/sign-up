import { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import clsx from "clsx";

type Props<T extends string> = {
  register: UseFormRegisterReturn<T>;
  error?: boolean;
  errorMsg?: string;
  success?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = <T extends string, >({
  type = 'text',
  register,
  error,
  errorMsg,
  success,
  ...props
}: Props<T>) => (
  <>
    <input
      className={clsx(
        "outline-none block w-full bg-white text-dark-blue border border-transparent py-2.5 px-5 rounded-lg placeholder-soft-blue focus:border-soft-blue",
        { "border-emerald-500! text-emerald-500!": success },
        { "border-red-400! text-red-400! bg-red-50!": error },
      )}
      type={type}
      {...props}
      {...register}
    />
    {errorMsg && <p className="mt-2 px-5 text-red-400 text-xs">{errorMsg}</p>}
  </>
);

export default Input;