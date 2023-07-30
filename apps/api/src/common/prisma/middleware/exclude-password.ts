import { Prisma } from '@prisma/client';
function exclude(user, ...keys) {
  for (const key of keys) {
    delete user[key];
  }
  return user;
}
export function excludePasswordMiddleware(): Prisma.Middleware {
  return async (params, next) => {
    const result = await next(params);
    if (params?.model === 'User' && params?.args?.select?.password !== true) {
      // check array
      if (Array.isArray(result)) {
        return result.map((user) => exclude(user, 'password'));
      }

      exclude(result, 'password');
    }
    return result;
  };
}
