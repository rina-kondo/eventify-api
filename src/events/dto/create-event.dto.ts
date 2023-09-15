import { IsNotEmpty, IsOptional, MaxLength, MinLength, IsDateString, IsString, IsNumber } from 'class-validator';

export class CreateEventDto {
  /**
   * 予定のタイトル
   * @example "食事会"
   */
  @IsString({ message: 'タイトルは文字列で入力してください' })
  @IsNotEmpty({ message: 'タイトルを入力してください' })
  @MinLength(1, { message: 'タイトルは1文字以上で入力してください' })
  @MaxLength(50, { message: 'タイトルは50文字以下で入力してください' })
  summary: string;

  /**
   * 予定の説明
   * @example "Aさんと食事会"
   */
  @IsString({ message: '説明は文字列で入力してください' })
  @IsOptional({ message: '説明を入力してください' })
  @MaxLength(300, { message: '説明は300文字以下で入力してください' })
  description?: string;

  /**
   * 予定の実施場所
   * @example "山猫軒"
   */
  @IsString({ message: '場所は文字列で入力してください' })
  @IsOptional({ message: '場所を入力してください' })
  @MaxLength(300, { message: '場所は300文字以下で入力してください' })
  location?: string;

  /**
   * 予定の開始時刻
   * @example 2023-09-03T04:45:00.962Z
   */
  @IsDateString({})
  @IsNotEmpty({ message: '開始時刻を入力してください' })
  dtStart: Date;

  /**
   * 予定の終了時刻
   * @example 2023-09-03T05:45:00.962Z
   */
  @IsDateString({})
  @IsNotEmpty({ message: '終了時刻を入力してください' })
  dtEnd: Date;

  /**
   * 予定を作成したユーザーID
   * @example 1
   */
  @IsNumber({}, { message: 'ユーザーIDは数値で入力してください' })
  @IsNotEmpty({ message: 'ユーザーIDを入力してください' })
  userId: number;
}
