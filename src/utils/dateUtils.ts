import {DateTime} from 'luxon';

import {getISOString} from './helpers';

//https://moment.github.io/luxon/#/formatting?id=table-of-tokens - Luxon date and time formats

export enum DateFormats {
  '01 Jan, 2023' = 'dd MMM, yyyy',
  '1 Jan, 2023' = 'd MMM, yyyy',
  '01 Jan 2023' = 'dd MMM yyyy',
  '(Wed)' = '(ccc)',
  '22:50' = 'HH:mm',
  '1 Jan 2023' = 'd MMM, yyyy',
  '31.12.2000' = 'dd.MM.yyyy',
  '22/05/1997' = 'dd/LL/yy',
  "22/05/1997 'at' 22:22 (+02:00)" = "d/LL/yy 'at' T (ZZZZ)",
  "1 Jan, 2023 'at' 22:22 (+02:00)" = "d MMM, yyyy 'at' T (ZZZZ)",
  '22:50 (EST)' = 'T (ZZZZ)',
  '1 Jan' = 'd MMM',
  'Mon, 1 Jan 2022 00:00:01 GMT' = 'ccc, d MMM yyyy HH:mm:ss ZZZZ'
}

export const getDateTime = (date?: string | Date) => {
  if (typeof date === 'string') {
    return DateTime.fromISO(date);
  }

  if (typeof date === 'object') {
    return DateTime.fromJSDate(date);
  }

  return DateTime.now();
};

const DateUtils = {
  getDateWithoutHours: (
    date?: string | Date | null,
    format = DateFormats['01 Jan, 2023'],
  ) => {
    if (!date) return '';

    return getDateTime(date).toFormat(format);
  },
  getDateWithoutHoursFromBE: (
    date?: string,
    format = DateFormats['01 Jan, 2023'],
  ): string => {
    return date ? DateTime.fromISO(date, {setZone: true}).toFormat(format) : '';
  },
  getHoursAndMinutes: (date: string | Date | null) => {
    //TODO: replace with getDateWithoutHours, and rename getDateWithoutHours accordingly
    if (!date) return '';

    return getDateTime(date).toFormat('HH:mm');
  },
  // 21st of May, 10:50 or 22nd of April, 2023
  getFormattedDayMonthTime: ({
    date,
    venueZone,
    showYear,
    showDateOnly,
  }: {
    date: string | Date | undefined;
    venueZone?: string;
    showYear?: boolean;
    showDateOnly?: boolean;
  }) => {
    if (!date) return '';
    const zonedDate = DateTime.fromISO(date as string, {
      zone: venueZone || 'local',
    });

    const day = zonedDate.toFormat('d');
    const month = zonedDate.toFormat('MMMM');
    const year = zonedDate.toFormat('yyyy');
    const time = zonedDate.toFormat('HH:mm');
    const zone = zonedDate.toFormat('ZZZZ', {
      locale: 'en-GB',
    });

    const getDayEnding = () => {
      const lastSymbol = day.at(-1);
      switch (lastSymbol) {
        case '1':
          return 'st';
        case '2':
          return 'nd';
        case '3':
          return 'rd';
        default:
          return `th`;
      }
    };

    const ending = getDayEnding();

    const yearAndTimeAndZone = showDateOnly
      ? ''
      : showYear
      ? ', ' + year
      : `, ${time} (${zone})`;

    switch (day) {
      case '11':
      case '12':
      case '13':
        return `${day}th of ${month}${yearAndTimeAndZone}`;
      default:
        return `${day}${ending} of ${month}${yearAndTimeAndZone}`;
    }
  },
  getHoursAndMinutesFromBE: (date?: string) => {
    //TODO: replace with getDateWithoutHoursFromBE, and rename getDateWithoutHoursFromBE accordingly
    return date
      ? DateTime.fromISO(date, {setZone: true}).toFormat('HH:mm')
      : '';
  },
  getTotalHours: (
    checkOutDate: string | Date | null,
    checkInDate: string | Date | null,
  ): number => {
    if (!checkOutDate || !checkInDate) return 0;

    return getDateTime(checkOutDate).diff(getDateTime(checkInDate), 'hours')
      .hours;
  },
  normalizeDateToBackendFormat: (date: string): string => {
    if (!date) return '';
    if (!getDateTime(date).isValid) return String(date);

    return getISOString(getDateTime(date));
  },
  checkIsCurrentDayToday: (day: string) => {
    const todayWeekDay = DateTime.now()
      .setLocale('en-US')
      .weekdayLong?.toUpperCase();

    return day.toUpperCase() === todayWeekDay;
  },
  setDateSupplierBookings: (date: string) => {
    const dateTime = DateTime.fromISO(date);
    const relativeDate = dateTime.toRelativeCalendar({locale: 'en-GB'});

    const object = {
      today: 'Today',
      tomorrow: 'Tomorrow',
    };

    return (
      object[relativeDate as keyof typeof object] ??
      dateTime.toFormat(DateFormats['22/05/1997'])
    );
  },
  isSameDay(firstDate?: string, secondDate?: string) {
    if (!firstDate || !secondDate) return false;

    return getDateTime(firstDate)
      .startOf('day')
      .equals(getDateTime(secondDate).startOf('day'));
  },
  isSameMomentInTime(firstDate: string, secondDate: string) {
    if (!firstDate || !secondDate) return false;

    const dateFirst = getDateTime(firstDate).toFormat('x');
    const dateSecond = getDateTime(secondDate).toFormat('x');

    return dateFirst === dateSecond;
  },
  convertMinutesToHours(minutes: number): string {
    if (minutes < 60) return `${Math.round(minutes)} min`;
    const h = Math.floor(minutes / 60);
    const m = Math.floor(minutes % 60);
    return `${h} h ${m} min`;
  },
  getDifferenceInDaysAndHours(
    startTime: string | Date,
    endTime: string | Date,
  ) {
    const start = getDateTime(startTime);
    const end = getDateTime(endTime);

    return end.diff(start, ['days', 'hours', 'minutes']).toObject();
  },
  isBefore(startTime?: string | Date | null, endTime?: string | Date | null) {
    if (!startTime || !endTime) return false;

    const start = getDateTime(startTime);
    const end = getDateTime(endTime);

    return start < end;
  },
  isAfter(startTime?: string | Date, endTime?: string | Date): boolean {
    if (!startTime || !endTime) return false;

    const start = getDateTime(startTime);
    const end = getDateTime(endTime);

    return start > end;
  },
  getISOFromDate(date: Date) {
    return getISOString(DateTime.fromJSDate(date));
  },
  getDateFromISO(date: string) {
    return DateTime.fromISO(date).toJSDate();
  },
  convertDateToLocal(date: string) {
    return getISOString(DateTime.fromISO(date, {zone: 'utc'}).setZone('local'));
  },
  getFormattedDateTime(
    date: string | undefined,
    timeZone: string,
    pattern: DateFormats,
  ) {
    if (!date) return '';

    return DateTime.fromISO(date).setZone(timeZone).toFormat(pattern);
  },
  // 1 Jan to 2 Jan, 2023
  getDatePeriod(date: string, days: number) {
    if (!date) return '';
    const time = getDateTime(date);
    const firstDay = time.toFormat(DateFormats['1 Jan']);
    const secondDay = time.plus({days}).toFormat(DateFormats['1 Jan, 2023']);
    return `${firstDay} to ${secondDay}`;
  },
};

export default DateUtils;
