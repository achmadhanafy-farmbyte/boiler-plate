import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ApiCoffeeResponse} from '../api/example/coffeeApi';

type OrderItem = ApiCoffeeResponse & {
  quantity: number;
};

type OrderState = {
  orderList: OrderItem[];
};

const initialState: OrderState = {
  orderList: [],
};

const orderSlice = createSlice({
  name: 'orderSlice',
  initialState,
  reducers: {
    setOrderCart: (state, action: PayloadAction<OrderItem>) => {
      // state.value = action.payload;
      const findOrder = state.orderList?.find(
        item => item.id === action.payload.id,
      );
      if (findOrder?.id && action.payload.quantity) {
        const newOrder = state.orderList.map(item => {
          if (item.id === action.payload.id) {
            return action.payload;
          }
          return item;
        });
        state.orderList = newOrder;
      } 
      // Quantity is 0 remove item
      else if (findOrder?.id){
        const newOrder = state.orderList.filter(item => item.id !== action.payload.id);
        state.orderList = newOrder;
      }
      else if (action.payload.quantity) {
        state.orderList.push(action.payload);
      }
    },
  },
});

export const {setOrderCart} = orderSlice.actions;
export default orderSlice.reducer;
