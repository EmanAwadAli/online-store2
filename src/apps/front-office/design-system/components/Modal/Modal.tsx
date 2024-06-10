import { ReactNode } from "react";
import OverLay from "../OverLay";
import { Atom } from "@mongez/react-atom";

export type ModalProps = {
    title?: string,
    children:ReactNode,
    atom: Atom
};
export default function Modal({title, children, atom}: ModalProps) {
  const opened = atom.use("opened");
  return (
   <>
    <div className={`modal flex items-center w-[90%] max-w-[600px] h-auto fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  z-50 ${opened ? "visible" : "invisible"}`}>
      <div className="modal-content m-auto bg-white p-5 rounded-lg">
        {
          title ?
          <div className="modal-header pb-2 border-b border-gray-500 mb-2">
            <h3 className="title text-lg font-bold">{title}</h3>
          </div>
          : ""
        }
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
    <OverLay atom={atom} modal className="z-40"></OverLay>
   </>
  );
}
