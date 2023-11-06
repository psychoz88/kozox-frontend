import {setContactFormData} from './reducer';

import {AppDispatch} from 'store/types';
import {TContainer} from '../../app/';

export const getContactFormData =
  (formData: any) =>
  (dispatch: AppDispatch, _: any, {appContainer}: TContainer) => {
    appContainer.sentContactFormToTelegramBot({
      payload: formData,
      onSuccess: () => {
        // (data: any)
        // if need response - use (data: any) instead of formData
        dispatch(setContactFormData(formData));
      },
      onError: (error: any) => {
        console.log(error, 'error');
        // dispatch(getSupplierOrdersError(error));
      },
    });
  };
