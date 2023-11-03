import {TDeviceType} from 'types/main';

export type IAppReducer = {
  deviceType: TDeviceType;
  contactFormData: Record<string, string>;
};
