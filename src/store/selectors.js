import { createSelector } from '@reduxjs/toolkit';

export const getAdvertsSelector = state => state.adverts.items;
export const getAllAdvertsSelector = state => state.adverts.allItems;
export const getFavoritesSelector = state => state.adverts.favorites;
export const getLoaderSelector = state => state.adverts.isLoading;
export const getErrorSelector = state => state.adverts.error;
export const getFilterSelector = state => state.filter;

export const getFilteredSelector = createSelector(
  [getAllAdvertsSelector, getFilterSelector],
  (allItems, filter) =>
    allItems
      .filter(({ location }) => location.includes(filter.location))
      .filter(({ form }) => form.includes(filter.type))
      .filter(item =>
        filter.equipment.length
          ? filter.equipment.every(equip => item[equip] || item.details[equip])
          : item
      )
);
