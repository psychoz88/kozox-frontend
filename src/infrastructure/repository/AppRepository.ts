import {BOT_TOKEN, CHAT_ID} from 'constants/telegramBot';
import {ApiType, IApi} from 'infrastructure/common/apiService';

const appRepository = (api: IApi) => ({
  sentContactFormToTelegramBot: async (data: any) =>
    await api.get(
      ApiType.Telegram,
      `bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=Name%3A+${data.name}%2E+Email%3A+${data.email}%2E+Note%3A+${data.note}%2E`,
    ),
});

export default appRepository;
