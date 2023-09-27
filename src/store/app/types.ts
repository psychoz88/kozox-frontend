import {TDeviceType} from 'types/main';

export type IAppReducer = {
  environment: string;
  openRegisterPopup: boolean;
  deviceType: TDeviceType;
};
