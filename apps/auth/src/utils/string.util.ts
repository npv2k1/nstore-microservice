export const StringUtil = {
  ConvertLatinToUtf8: (str) => {
    return Buffer.from(str, 'latin1').toString('utf8');
  },
};
