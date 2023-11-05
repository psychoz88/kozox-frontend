import {ApiType, IApi} from 'infrastructure/common/apiService';

const appRepository = (api: IApi) => ({
  getOfferRequestById: async (id: string) =>
    // await api.get(ApiType.Offers, `requests/${id}`),
    await api.get(
      ApiType.Telegram,
      `bot6354779574:AAG2mRG9tIzXG3qv2oHHFcgDA-9521qqxvM/sendMessage?chat_id=190781466&text=Hello%20from%20KOZOX${
        id ? '123' : '345'
      }`,
    ),
  // https://api.telegram.org/bot6354779574:AAG2mRG9tIzXG3qv2oHHFcgDA-9521qqxvM/sendMessage?chat_id=190781466&text=Hello%20world
});

export default appRepository;
