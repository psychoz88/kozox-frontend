import {AppDispatch} from 'store/types';
import {setContactFormData} from './reducer';
import {TContainer} from '../../app/';

export const getContactFormData =
  ({formData}: any) =>
  (dispatch: AppDispatch, _: any, {appContainer}: TContainer) => {
    appContainer.getOfferRequestById({
      payload: formData,
      onSuccess: (data: any) => {
        dispatch(setContactFormData(data));
      },
      // onError: (error: any) => {
      //   dispatch(getSupplierOrdersError(error));
      // },
    });
  };
