import { Atom } from "@mongez/react-atom";
import { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import { IoCloseOutline } from "react-icons/io5";

export type OverLayProps = {
  children?: ReactNode,
  atom: Atom,
  modal?: boolean,
  className?: string
};
export default function OverLay({children, atom, modal, className}: OverLayProps) {
  const opened = atom.use("opened");

  useEffect(() => {
    if (opened) {
      window.document.body.style.overflow = "hidden";
      window.document.body.style.paddingRight = "17px";
    }
    return () => {
      window.document.body.style.overflow = "";
      window.document.body.style.paddingRight = "0";
    };
  }, [opened]);

  return createPortal(
    <div className={`${className} overlay fixed top-0 bottom-0 left-0 right-0 z-10 bg-[rgba(0,0,0,.6)] ${opened ? "visible" : "invisible"}`} onClick={() =>atom.change("opened", false) }>
      {
        modal ? <IoCloseOutline className=" text-5xl hover:opacity-60 absolute top-2 right-2 cursor-pointer transition duration-500 ease-in-out" /> : ""
      }
      {children}
    </div>,
    document.body
  );
}
