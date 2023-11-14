import {setContactFormData} from './reducer';

import {AppDispatch} from 'store/types';
import {TContainer} from '../../app/';
import {TFormData} from 'types/main';

export const getContactFormData =
  (formData: TFormData) =>
  (dispatch: AppDispatch, _: any, {appContainer}: TContainer) => {
    appContainer.sentContactFormToTelegramBot({
      payload: formData,
      onSuccess: async (data: any) => {
        const responseData = [
          await data[0].then((response: any) => response),
          await data[1].then((response: any) => response),
        ];

        dispatch(setContactFormData(responseData));
      },
    });
  };
