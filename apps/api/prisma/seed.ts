// /* eslint-disable @typescript-eslint/no-var-requires */
import { Prisma, PrismaClient } from '@prisma/client';

import * as fs from 'fs';
import * as util from 'util';

import _ from 'lodash';

// const Iconv = require('iconv').Iconv;
// const iconv = new Iconv('UTF-16', 'UTF-8');
const prisma = new PrismaClient({
  // log: [
  //   {
  //     emit: 'event',
  //     level: 'query',
  //   },
  //   {
  //     emit: 'stdout',
  //     level: 'error',
  //   },
  //   {
  //     emit: 'stdout',
  //     level: 'info',
  //   },
  //   {
  //     emit: 'stdout',
  //     level: 'warn',
  //   },
  // ],
});

// async function seeding(model: string) {
//   try {
//     const dboNameUpper =
//       _.camelCase(model).charAt(0).toUpperCase() + _.camelCase(model).slice(1);
//     const buffer = fs.readFileSync(`./prisma/db/dbo.${dboNameUpper}.Table.sql`);

//     const sqlText = iconv
//       .convert(buffer)
//       .toString('utf8')
//       .split(/\r?\n/)
//       .map((item) => {
//         // remove go
//         if (item.trim() === 'GO') {
//           return '';
//         }
//         if (item.trim() !== '') {
//           return item + ';';
//         }
//       })
//       .join('\n');

//     const res = await prisma.$executeRawUnsafe(sqlText);
//   } catch (error) {}
// }

async function seedTable(table: string) {
  try {
    const models = Object.keys(prisma).filter((key) => key.startsWith('_') === false);

    // check model in models
    if (models.includes(table)) {
      const data = require(`./seed/${table}.json`);
      console.log(data);
      // clean db
      await prisma[table].deleteMany({});

      const res = await prisma.$transaction([
        ...data.map((item) => {
          // delete item.id;
          return prisma[table].create({ data: item });
        }),
      ]);
      //
    } else {
    }
  } catch (err) {}
}

async function main() {
  await seedTable('role');
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
