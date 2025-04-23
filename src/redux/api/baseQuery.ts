import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Config from 'react-native-config';

export const baseQuery = fetchBaseQuery({
  baseUrl: Config.API_URL,
});
