import { modifieFirstLetter } from "./modifieFirstLetter";

export const normalize=(obj, value) => {
  if(obj[value]<0) return;

  if(value==='airConditioner') return 'AC';
  if(value==='beds') return `${obj[value]} ${value}`;
  return modifieFirstLetter(value);
}
