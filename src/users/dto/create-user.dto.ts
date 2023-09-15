import { IsNotEmpty, IsString, MinLength, IsEmail } from 'class-validator';

export class CreateUserDto {
  /**
   * ユーザーネーム
   * @example "山田太郎"
   */
  @IsString({ message: 'ユーザーネームは文字列で入力してください' })
  @IsNotEmpty({ message: 'ユーザーネームを入力してください' })
  name: string;

  /**
   * ユーザーのメールアドレス
   * @example "yamada@example.com"
   */
  @IsEmail({}, { message: 'メールアドレスの形式が正しくありません' })
  @IsNotEmpty({ message: 'メールアドレスを入力してください' })
  email: string;

  /**
   * ユーザーの認証パスワード
   * @example "password"
   */
  @IsString({ message: 'パスワードは文字列で入力してください' })
  @IsNotEmpty({ message: 'パスワードを入力してください' })
  @MinLength(6, { message: 'パスワードは6文字以上で入力してください' })
  password: string;
}
