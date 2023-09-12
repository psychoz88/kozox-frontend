import { ApiType, IApi } from "infrastructure/common/apiService";

const offersRepository = (api: IApi) => ({
  getOfferRequestById: async (id: string) =>
    await api.get(ApiType.Offers, `requests/${id}`),
});

export default offersRepository;
