import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, MaxLength, MinLength, IsDateString } from 'class-validator';

export class CreateEventDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  @MaxLength(50)
  summary: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  @MaxLength(300)
  description?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  @MaxLength(300)
  location?: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  dtStart: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  dtEnd: Date;

  @IsOptional()
  @ApiProperty({ required: false })
  userId: number | null;
}
