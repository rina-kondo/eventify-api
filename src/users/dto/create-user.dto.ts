import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength, IsEmail } from 'class-validator';

export class CreateUserDto {
  /**
   * ユーザーネーム
   * @example "山田太郎"
   */
  @IsString()
  @IsNotEmpty()
  name: string;

  /**
   * ユーザーのメールアドレス
   * @example "yamada@example.com"
   */
  @IsEmail()
  @IsNotEmpty()
  email: string;

  /**
   * ユーザーの認証パスワード
   * @example "password"
   */
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password: string;
}
