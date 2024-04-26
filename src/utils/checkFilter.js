export const checkFilter = obj => {
  for (const key in obj) {
    if (Array.isArray(obj[key]) && obj[key].length > 0) {
      return true;
    } else if (!Array.isArray(obj[key]) && obj[key]) {
      return true;
    }
  }
  return false;
};
