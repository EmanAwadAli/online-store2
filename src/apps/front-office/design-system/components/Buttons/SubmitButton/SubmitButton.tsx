import { useSubmitButton } from "@mongez/react-form";
import { ButtonHTMLAttributes } from "react";
import { ImSpinner9 } from "react-icons/im";

export type SubmitButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {

};
export default function SubmitButton({children}: SubmitButtonProps) {
  const { disabled, isSubmitting } = useSubmitButton();
  return (
    <button type="submit" disabled={disabled || isSubmitting} className={`${disabled ? "bg-gray-100 cursor-not-allowed" : "bg-primary hover:bg-primary-hover" } flex items-center justify-center min-w-28 h-12 px-6 rounded-lg text-white transition-all duration-500 ease-in-out`}>
      {isSubmitting ?  <ImSpinner9 className="animate-spin"/> : children}
    </button>
  );
}
