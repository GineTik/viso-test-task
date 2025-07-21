import { ApiProperty } from '@nestjs/swagger';

export class AiResponseDto {
  @ApiProperty({
    type: String,
  })
  content: string;

  @ApiProperty({
    type: String,
  })
  model: string;
}
