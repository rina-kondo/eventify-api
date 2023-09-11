import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class LoginDto {
  /**
   * 認証ユーザーのメールアドレス
   * @example "user1@eventify.com"
   */
  @IsEmail()
  @IsNotEmpty()
  email: string;

  /**
   * 認証パスワード
   * @example "password"
   */
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password: string;
}
