import api from 'infrastructure/common/apiService';
import apiContainerBuilder from 'app/apiContainerBuilder';
import offersRepository from 'infrastructure/repository/OffersRepository';

type TOffersContainer = ReturnType<typeof offersRepository>;

const container = {
  offersContainer: apiContainerBuilder<TOffersContainer>({
    repository: offersRepository(api),
  }),
};

export type TContainer = typeof container;

export const {offersContainer} = container;

export default container;
