export const requiredFilled = (value) => {
    if (value) return undefined;
    return 'Filled is required';
}
const maxLengthCreator = (maxLengt) => (value) => {
    if (value.length > maxLengt) return `Max symbols is ${maxLengt}`;
    return undefined;
}

const minLengthCreator = (minLengt) => (value) => {
    if (value.length < minLengt) return `Min symbols is ${minLengt}`;
    return undefined;
}



export const maxSymbols50 = maxLengthCreator(50);
export const maxSymbols20 = maxLengthCreator(20);
export const minSymbols6 = minLengthCreator(6);
