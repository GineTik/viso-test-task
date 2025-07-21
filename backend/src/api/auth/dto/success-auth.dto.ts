import { ApiProperty } from '@nestjs/swagger';

export class SuccessAuthDto {
  @ApiProperty({
    type: String,
  })
  accessToken: string;
}
