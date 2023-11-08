import {setContactFormData} from './reducer';

import {AppDispatch} from 'store/types';
import {TContainer} from '../../app/';

export const getContactFormData =
  (formData: any) =>
  (dispatch: AppDispatch, _: any, {appContainer}: TContainer) => {
    appContainer.sentContactFormToTelegramBot({
      payload: formData,
      onSuccess: async (data: any) => {
        // if need response - use (data: any) instead of formData
        // if need data from input - use formData instead of data

        const responseData = [
          await data[0].then((response: any) => response),
          await data[1].then((response: any) => response),
        ];

        dispatch(setContactFormData(responseData));
      },
      onError: (error: any) => {
        console.log(error, 'error');
        // dispatch(getSupplierOrdersError(error));
      },
    });
  };
