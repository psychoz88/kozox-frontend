import {setBybitTokensData, setContactFormData} from './reducer';

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

export const getBybitTokensData =
  () =>
  (dispatch: AppDispatch, _: any, {appContainer}: TContainer) => {
    appContainer.getBybitTokens({
      onSuccess: (data: any) => {
        console.log(data, 'BYBIT data from response');

        const symbols = (data.result.list as Array<{symbol: string}>)
          .map((item) => item.symbol)
          .map((symbol) => `BYBIT:${symbol}.P`);
        console.log(symbols.join(', '));

        const blob = new Blob([symbols.join('\n')], {type: 'text/plain'});
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'actual-list-bybit.txt';
        a.click();
        URL.revokeObjectURL(url);

        dispatch(setBybitTokensData(data));
      },
    });
  };
