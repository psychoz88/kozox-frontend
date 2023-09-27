import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {IAppReducer} from './types';
import {TDeviceType} from 'types/main';

const initialState: IAppReducer = {
  environment: '123',
  openRegisterPopup: false,
  deviceType: {
    width: 0,
    height: 0,
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  },
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
    setDeviceType(state, action: PayloadAction<TDeviceType>) {
      state.deviceType = action.payload;
    },
  },
});

export const {setAppEnvironment, setOpenRegisterPopup, setDeviceType} =
  appSlice.actions;

export default appSlice.reducer;
