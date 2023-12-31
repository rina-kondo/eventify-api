import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

const roundsOfHashing = 10;

async function main() {
  const password1 = await bcrypt.hash('password', roundsOfHashing);

  const user1 = await prisma.user.upsert({
    where: { email: 'user1@eventify.com' },
    update: { password: password1 },
    create: {
      email: 'user1@eventify.com',
      password: password1,
      name: 'user1',
    },
  });

  const event1 = await prisma.event.upsert({
    where: { id: 1 },
    update: {},
    create: {
      summary: '花火大会',
      description: '花火大会です',
      location: 'xx駅集合',
      dtStart: new Date('2023-08-01 20:00:00.000'),
      dtEnd: new Date('2023-08-01 21:00:00.000'),
      userId: user1.id,
    },
  });

  const event2 = await prisma.event.upsert({
    where: { id: 2 },
    update: {
      userId: user1.id,
    },
    create: {
      summary: 'xxに電話',
      dtStart: new Date('2023-08-02 20:00:00.000'),
      dtEnd: new Date('2023-08-02 21:00:00.000'),
      userId: user1.id,
    },
  });

  console.log({ user1, event1, event2 });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
