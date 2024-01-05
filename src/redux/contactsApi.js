import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  tagTypes: ['Contacts'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://62a8dbf5ec36bf40bdaf85f4.mockapi.io/',
  }),
  endpoints: builder => ({
    getContactsApi: builder.query({
      query: () => `contacts`,
      providesTags: ['Contacts'],
    }),
    addContact: builder.mutation({
      query: body => ({
        url: `contacts`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [ 'Contacts'],
    }),
    deleteContact: builder.mutation({
      query: contactId => ({
        url: `contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: [ 'Contacts'],
    }),
  }),
});

export const {
  useGetContactsApiQuery,
  useDeleteContactMutation,
  useAddContactMutation,
} = contactsApi;
