import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {IAppReducer} from './types';

const initialState: IAppReducer = {
  environment: '123',
  openRegisterPopup: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setAppEnvironment(state, action: PayloadAction<string>) {
      state.environment = action.payload;
    },
    setOpenRegisterPopup(state, action: PayloadAction<boolean>) {
      state.openRegisterPopup = action.payload;
    },
  },
});

export const {setAppEnvironment, setOpenRegisterPopup} = appSlice.actions;

export default appSlice.reducer;
