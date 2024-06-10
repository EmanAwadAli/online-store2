import { ButtonHTMLAttributes } from "react";

export type PrimaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function ButtonPrimary({children}: PrimaryButtonProps) {
  return (
    <>
      <button className="flex items-center justify-center min-w-28 h-12 px-6 rounded-lg bg-primary hover:bg-primary-hover text-white transition-all duration-500 ease-in-out">{children}</button>
    </>
  );
}
