import { IsNotEmpty, IsOptional, MaxLength, MinLength, IsDateString, IsString, IsNumber } from 'class-validator';

export class CreateEventDto {
  /**
   * 予定のタイトル
   * @example "食事会"
   */
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(50)
  summary: string;

  /**
   * 予定の説明
   * @example "Aさんと食事会"
   */
  @IsString()
  @IsOptional()
  @MaxLength(300)
  description?: string;

  /**
   * 予定の実施場所
   * @example "山猫軒"
   */
  @IsString()
  @IsOptional()
  @MaxLength(300)
  location?: string;

  /**
   * 予定の開始時刻
   * @example 2023-09-03T04:45:00.962Z
   */
  @IsDateString()
  @IsNotEmpty()
  dtStart: Date;

  /**
   * 予定の終了時刻
   * @example 2023-09-03T05:45:00.962Z
   */
  @IsDateString()
  @IsNotEmpty()
  dtEnd: Date;

  /**
   * 予定を作成したユーザーID
   * @example 1
   */
  @IsNumber()
  @IsNotEmpty()
  userId: number;
}
