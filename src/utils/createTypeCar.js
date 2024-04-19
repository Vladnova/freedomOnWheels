import { ReactComponent as IconVan } from '../img/svg/van.svg';
import { ReactComponent as IconFully } from '../img/svg/fully.svg';
import { ReactComponent as IconAlcove } from '../img/svg/alcove.svg';

export const createTypeCar = () => {
  return [
    { id: 1, value: 'panelTruck', svg: <IconVan width="40" height="28" />, text: 'Van' },
    { id: 2, value: 'fullyIntegrated', svg: <IconFully width="40" height="28" />, text: 'Fully Integrated' },
    { id: 3, value: 'alcove', svg: <IconAlcove width="40" height="28" />, text: 'Alcove' },
  ];
};
