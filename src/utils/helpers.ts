import {DateTime} from 'luxon';

export const getISOString = (
  date: DateTime | Date | null | undefined,
): string => {
  if (!date) return '';

  if ('toISO' in date) {
    return date.toISO() || '';
  }

  if (typeof date === 'object') {
    return DateTime.fromJSDate(date).toISO() || '';
  }
  return '';
};
