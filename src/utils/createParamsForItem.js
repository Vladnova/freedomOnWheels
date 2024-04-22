import { modifieFirstLetter } from './modifieFirstLetter';

export const createParamsForItem = (obj, value) => {
  if (value === 'airConditioner') return 'AC';
  if (value === 'beds' || value === 'adults') return `${obj[value]} ${value}`;

  return modifieFirstLetter(value);
};
