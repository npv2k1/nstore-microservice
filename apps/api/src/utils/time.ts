import moment from 'moment';

// get current timestamp
export const getCurrentTimestamp = () => {
  return moment().utc(true).unix();
};
// get current timestamp
export const getTimestampBydate = (date: Date) => {
  return moment(date).unix();
};
// get current timestamp

export const getDateByTimestamps = (timestamp: number, time?: boolean) => {
  if (!timestamp) return null;
  return new Date(timestamp * 1000);
};
export const getDateFormatByTimestamps = (timestamp: number, format: string) => {
  if (!timestamp) return '';
  return moment.unix(timestamp).format(format);
};

export const getCurrentTimestampUtc = () => {
  return moment().utc(true).unix();
};
