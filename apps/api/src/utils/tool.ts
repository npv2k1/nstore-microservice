import { isNumber } from 'class-validator';
import crypto from 'crypto';
import moment from 'moment';

export function getItemValue<T>(key: string): T {
  try {
    const res = JSON.parse(key) as T;
    return res;
  } catch {
    return key as unknown as T;
  }
}
export type PickTypeByKey<T, U> = T[U extends keyof T ? U : never];

export function filterObject(obj, key) {
  for (const i in obj) {
    if (!obj.hasOwnProperty(i)) continue;
    if (typeof obj[i] == 'object') {
      filterObject(obj[i], key);
    } else if (i == key) {
      delete obj[key];
    }
  }
  return obj;
}

/**
 * It returns a random string of characters of a given length.
 * @param [length=10] - The length of the ID to be generated.
 * @returns A random string of characters of length 10.
 */
export function makeId(length = 6) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

/**
 * @param text - The text that needs to replace {key} by a value.
 * @param params - the object contains key and value to replace in text.
 * @returns Text after change
 */
export const changeText = (text: string, params: any) => {
  Object.keys(params).forEach((key) => {
    text = text?.replace(`{${key}}`, params[key]);
  });
  return text;
};

/**
 * @param arr - The array that needs to remove duplicate item.
 * @returns An array without duplicate item.
 */
export const removeDuplicateFromArray = (arr: Array<any>) => {
  return [...new Set(arr)];
};

export const checkNumber = (value: any) => {
  const _number = Number(value);
  return isNumber(_number);
};

export const getCurrentDate = (format: string) => {
  return moment().format(format);
};

// lodash compare string
export const compareString = (str1: string, str2: string) => {
  return str1.localeCompare(str2);
};

export function generateRandomPassword(length: number): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let password = '';
  for (let i = 0; i < length; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
}

export function randomFileName() {
  const randomName = Array(32)
    .fill(null)
    .map(() => Math.round(Math.random() * 16).toString(16))
    .join('');
  return randomName;
}
