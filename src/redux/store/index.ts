import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import orderReducer from '../slices/orderSlice';
import { coffeeApi } from '../api/example/coffeeApi';

export const store = configureStore({
  reducer: {
    order: orderReducer,
    [coffeeApi.reducerPath]: coffeeApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(coffeeApi.middleware),
});

// Type helpers
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: <T>(selector: (state: RootState) => T) => T = useSelector;