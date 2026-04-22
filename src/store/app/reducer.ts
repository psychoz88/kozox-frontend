import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {IAppReducer, TContactFormData} from './types';
import {TDeviceType} from 'types/main';

const initialState: IAppReducer = {
  deviceType: {
    width: 0,
    height: 0,
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  },
  contactFormData: [],
  bybitTokensData: {},
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setContactFormData(state, action: PayloadAction<TContactFormData>) {
      state.contactFormData = action.payload;
    },
    setDeviceType(state, action: PayloadAction<TDeviceType>) {
      state.deviceType = action.payload;
    },
    setBybitTokensData(state, action: PayloadAction<any>) {
      state.bybitTokensData = action.payload;
    },
  },
});

export const {setContactFormData, setDeviceType, setBybitTokensData} = appSlice.actions;

export default appSlice.reducer;
