import { createSelector } from '@reduxjs/toolkit';

const getLoading = (state) => state.contacts.loading;

const getAllContacts = (state) => state.contacts.items;

const getFilter = (state) => state.contacts.filter;

const getVisibleContacts = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
   // console.log('contacts', contacts);
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  },
);

const selectors = {
    getLoading,
    getFilter,
    getVisibleContacts,
    getAllContacts,
};
export default selectors;

// export const getVisibleContacts = state => {

// const contacts = getAllContacts(state);
// const filter = getFilter(state);
// const normalizedFilter = filter.toLowerCase();
// return contacts.filter(({ name }) =>
//     name.toLowerCase().includes(normalizedFilter),
//   );
//  };



