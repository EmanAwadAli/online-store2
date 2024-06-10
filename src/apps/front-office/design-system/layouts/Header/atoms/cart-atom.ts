import { atom, openAtom } from "@mongez/react-atom";

export type  CartAtomType = {
    opened: boolean,
    count: number
}
export const cartAtom = atom<CartAtomType>({
    key: "cart",
    default: {
        opened: false,
        count: 0
    }
});