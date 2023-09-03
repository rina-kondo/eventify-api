import { ApiProperty } from '@nestjs/swagger';
import { User } from '@prisma/client';
import { Exclude } from 'class-transformer';

export class UserEntity implements User {
  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }

  /**
   * ユーザーの識別ID
   * @example 1
   */
  @ApiProperty()
  id: number;

  /**
   * ユーザーネーム
   * @example "山田太郎"
   */
  @ApiProperty()
  name: string;

  /**
   * ユーザーのメールアドレス
   * @example "yamada@example.com"
   */
  @ApiProperty()
  email: string;

  /**
   * ユーザーの認証パスワード
   * @example "password"
   */
  @Exclude()
  password: string;

  /**
   * ユーザーの作成日
   * @example "2023-09-03T05:45:00.962Z"
   */
  @ApiProperty()
  createdAt: Date;

  /**
   * ユーザー情報の更新日
   * @example "2023-09-03T05:45:00.962Z"
   */
  @ApiProperty()
  updatedAt: Date;
}
