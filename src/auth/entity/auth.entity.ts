import { ApiProperty } from '@nestjs/swagger';

export class AuthEntity {
  /**
   * アクセストークン
   */
  accessToken: string;
}
