import { Event } from 'prisma/prisma-client';
import { ApiProperty } from '@nestjs/swagger';
import { UserEntity } from 'src/users/entities/user.entity';

export class EventEntity implements Event {
  /**
   * 予定ID
   * @example 1
   */
  id: number;

  /**
   * 予定のタイトル
   * @example "食事会"
   */
  summary: string;

  /**
   * 予定の説明
   * @example "Aさんと食事会"
   */
  @ApiProperty({ required: false })
  description: string | null;

  /**
   * 予定の実施場所
   * @example "山猫軒"
   */
  @ApiProperty({ required: false })
  location: string | null;

  /**
   * 予定の開始時刻
   * @example 2023-09-03T04:45:00.962Z
   */
  @ApiProperty()
  dtStart: Date;

  /**
   * 予定の終了時刻
   * @example 2023-09-03T05:45:00.962Z
   */
  @ApiProperty()
  dtEnd: Date;

  /**
   * 予定情報の作成日
   * @example 2023-09-03T05:45:00.962Z
   */
  @ApiProperty()
  createdAt: Date;

  /**
   * 予定情報の更新日
   * @example 2023-09-03T05:45:00.962Z
   */
  @ApiProperty()
  updatedAt: Date;

  /**
   * 予定を作成したユーザーID
   * @example 1
   */
  @ApiProperty()
  userId: number;

  /**
   * 予定を作成したユーザー情報
   */
  @ApiProperty({ required: false, type: UserEntity })
  user?: UserEntity;

  constructor({ user, ...data }: Partial<EventEntity>) {
    Object.assign(this, data);

    if (user) {
      this.user = new UserEntity(user);
    }
  }
}
