export const settingActiveTypeCar = ({
  value,
  activeTypeCar,
  setActiveTypeCar,
}) => {
  let updateIdElements;
  const isActive = activeTypeCar === value;

  if (isActive) {
    updateIdElements = '';
  } else {
    updateIdElements = value;
  }

  setActiveTypeCar(updateIdElements);
};
