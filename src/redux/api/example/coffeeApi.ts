// src/store/api/coffeeApi.ts
import {createApi} from '@reduxjs/toolkit/query/react';
import {baseQuery} from '../baseQuery';

export type ApiCoffeeResponse = {
  id: number;
  title: string;
  description: string;
  ingredients: string[];
  image: string;
};

export type ApiCoffeeRequest = {
  categories: 'hot' | 'iced';
};

export const coffeeApi = createApi({
  reducerPath: 'coffee', // 👈 separate reducer key
  baseQuery, // 👈 use shared one
  endpoints: builder => ({
    getHotCoffees: builder.query<ApiCoffeeResponse[], ApiCoffeeRequest>({
      query: ({categories}) => ({
        url: `/coffee/${categories}`,
        method: 'GET',
      }),
    }),
  }),
});

export const {useGetHotCoffeesQuery} = coffeeApi;
