import { Event } from 'prisma/prisma-client';
import { ApiProperty } from '@nestjs/swagger';
import { UserEntity } from 'src/users/entities/user.entity';

export class EventEntity implements Event {
  @ApiProperty()
  id: number;

  @ApiProperty()
  summary: string;

  @ApiProperty({ required: false })
  description: string | null;

  @ApiProperty({ required: false })
  location: string | null;

  @ApiProperty()
  dtStart: Date;

  @ApiProperty()
  dtEnd: Date;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty({ required: false, nullable: true })
  userId: number | null;

  @ApiProperty({ required: false, type: UserEntity })
  user?: UserEntity;

  constructor({ user, ...data }: Partial<EventEntity>) {
    Object.assign(this, data);

    if (user) {
      this.user = new UserEntity(user);
    }
  }
}
