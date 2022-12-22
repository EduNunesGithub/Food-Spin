const documentElement = document.documentElement;

export const pxToRem = (px: number) => {
    const HTMLFontSize = window.getComputedStyle(documentElement).fontSize;

    return `${px / parseFloat(HTMLFontSize)}rem`;
};