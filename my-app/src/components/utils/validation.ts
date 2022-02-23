export type ValidatorType = (value: string) => string | undefined;
export const requiredFilled: ValidatorType = (value: string) => {
  if (value) return undefined;
  return 'Filled is required';
};
type ValidatorCreatorType = (
  maxLengt: number
) => (value: string) => string | undefined;

const maxLengthCreator: ValidatorCreatorType = (maxLengt: number) => {
  return (value: string) => {
    if (value.length > maxLengt) return `Max symbols is ${maxLengt}`;
    return undefined;
  };
};

const minLengthCreator: ValidatorCreatorType = (minLengt) => {
  return (value) => {
    if (value.length < minLengt) return `Min symbols is ${minLengt}`;
    return undefined;
  };
};

export const maxSymbols50: ValidatorType = maxLengthCreator(50);
export const maxSymbols20: ValidatorType = maxLengthCreator(20);
export const minSymbols6: ValidatorType = minLengthCreator(6);
