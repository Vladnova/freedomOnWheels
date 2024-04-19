import { ReactComponent as IconAc } from '../img/svg/AC.svg';
import { ReactComponent as IconAutomatic } from '../img/svg/automatic.svg';
import { ReactComponent as IconKitchen } from '../img/svg/kitchen.svg';
import { ReactComponent as IconTV } from '../img/svg/TV.svg';
import { ReactComponent as IconShower } from '../img/svg/shower-WC.svg';

export const createEquipment = () => {
  return [
    { id: 'e1', value: 'airConditioner', svg: <IconAc width='32' height='32' />, text: 'AC' },
    { id: 'e2', value: 'transmission', svg: <IconAutomatic width='32' height='32' />, text: 'Automatic' },
    { id: 'e3', value: 'kitchen', svg: <IconKitchen width='32' height='32' />, text: 'Kitchen' },
    { id: 'e4', value: 'TV', svg: <IconTV width='32' height='32' />, text: 'TV' },
    { id: 'e5', value: 'shower', svg: <IconShower width='32' height='32' />, text: 'Shower/WC' },
  ];
};
