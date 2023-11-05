import {setContactFormData} from './reducer';

import {AppDispatch} from 'store/types';
import {TContainer} from '../../app/';

export const getContactFormData =
  ({formData}: any) =>
  (dispatch: AppDispatch, _: any, {appContainer}: TContainer) => {
    appContainer.getOfferRequestById({
      payload: formData,
      onSuccess: (data: any) => {
        console.log(data, 'data in action getContactFormData');
        dispatch(setContactFormData(data));
      },
      onError: (error: any) => {
        console.log(error, 'error');
        // dispatch(getSupplierOrdersError(error));
      },
    });
  };
