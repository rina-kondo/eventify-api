import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class LoginDto {
  /**
   * 認証ユーザーのメールアドレス
   * @example "user1@eventify.com"
   */
  @IsEmail({}, { message: 'メールアドレスの形式が正しくありません' })
  @IsNotEmpty()
  email: string;

  /**
   * 認証パスワード
   * @example "password"
   */
  @IsString({ message: 'パスワードは文字列で入力してください' })
  @MinLength(6, { message: 'パスワードは6文字以上で入力してください' })
  password: string;
}
