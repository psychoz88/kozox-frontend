import api from 'infrastructure/common/apiService';
import apiContainerBuilder from 'app/apiContainerBuilder';
import appRepository from 'infrastructure/repository/AppRepository';

type TAppContainer = ReturnType<typeof appRepository>;

const container = {
  appContainer: apiContainerBuilder<TAppContainer>({
    repository: appRepository(api),
  }),
};

export type TContainer = typeof container;

export const {appContainer} = container;

export default container;
