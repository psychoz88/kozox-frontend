import {BOT_TOKEN, CHAT_ID, CHAT_ID_J} from 'constants/telegramBot';
import {ApiType, IApi} from 'infrastructure/common/apiService';

const chatIds = [CHAT_ID, CHAT_ID_J]; // max 30 messages per second in Telegram

const appRepository = (api: IApi) => ({
  sentContactFormToTelegramBot: (data: any) =>
    chatIds.map(
      async (id) =>
        await api.get(
          ApiType.Telegram,
          `bot${BOT_TOKEN}/sendMessage?chat_id=${id}&text=Name%3A+${data.name}%2E+Email%3A+${data.email}%2E+Note%3A+${data.note}%2E`,
        ),
    ),
});

export default appRepository;
