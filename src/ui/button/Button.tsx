import { ButtonHTMLAttributes, memo } from "react";
import clsx from "clsx";

type Props = {
  variant?: 'primary';
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className, variant = 'primary', ...props }: Props) => (
  <button
    className={clsx(
      'cursor-pointer block w-full max-w-3xs py-3 px-8 mx-auto rounded-full font-bold transition-opacity duration-200 hover:opacity-90 active:opacity-90',
      {
        primary: 'text-white bg-gradient-to-r from-blue-300 to-indigo-500',
      }[variant],
      className,
    )}
    {...props}
  >
    {children}
  </button>
);

export default memo(Button);