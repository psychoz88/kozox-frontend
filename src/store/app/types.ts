import {TDeviceType} from 'types/main';
export type TTelegramResponse = {
  ok: boolean;
  result: {
    message_id: number;
    from: {
      id: number;
      is_bot: boolean;
      first_name: string;
      username: string;
    };
    chat: {
      id: number;
      first_name: string;
      username: string;
      type: string;
    };
    date: number;
    text: string;
    entities: [
      {
        offset: number;
        length: number;
        type: string;
      },
    ];
  };
};

export type TContactFormData = TTelegramResponse[];

export type IAppReducer = {
  deviceType: TDeviceType;
  contactFormData: TContactFormData;
  error: any;
};
