export type FontFaceType = {
    name: string,
    weights: {
        name: string,
        woff1: string;
        woff2: string,
        weight: string | number
    }[]
}

export type FontsType = FontFaceType[]
