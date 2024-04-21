import { modifieFirstLetter } from './modifieFirstLetter';
import { ReactComponent as IconKitchen } from '../img/svg/kitchen-smol.svg';
import { ReactComponent as IconAc } from '../img/svg/AC-smol.svg';
import { ReactComponent as IconBeds } from '../img/svg/beds.svg';

export const normalize = (obj, value) => {
  if (obj[value] < 0) return;

  if (value === 'airConditioner') {
    return { id: 1, value: 'AC', svg: <IconAc width="20" height="20" aria-label='airConditioner' /> };
  }
  if (value === 'beds') {
    return {
      id: 2,
      value: `${obj[value]} ${value}`,
      svg: <IconBeds width="20" height="20" aria-label='beds' />,
    };
  }

  return {
    id: 3,
    value: modifieFirstLetter(value),
    svg: <IconKitchen width="20" height="20" aria-label='kitchen' />,
  };
};
