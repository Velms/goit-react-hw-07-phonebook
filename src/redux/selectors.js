import { createSelector } from '@reduxjs/toolkit';

export const selectFilter = state => state.filter.value;

export const selectFilteredContacts = createSelector(
    [selectFilter],
    (filter) => {
      return contacts.filter(({ name }) =>
        name.toLowerCase().includes(filter.toLowerCase())
      );
    }
  );