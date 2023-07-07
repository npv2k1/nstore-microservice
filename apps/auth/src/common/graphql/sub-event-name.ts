export const SubEventName = {
  playground: 'playground',
  playground1: 'playground1',
} as const;
export type SubEventNameType = keyof typeof SubEventName;
