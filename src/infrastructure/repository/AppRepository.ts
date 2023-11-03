import {ApiType, IApi} from 'infrastructure/common/apiService';

const appRepository = (api: IApi) => ({
  getOfferRequestById: async (id: string) =>
    await api.get(ApiType.Offers, `requests/${id}`),
});

export default appRepository;
