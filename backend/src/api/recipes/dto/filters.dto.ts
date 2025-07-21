import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class FiltersDto {
  @IsString()
  @ApiProperty({
    type: String,
  })
  userId?: string;

  @IsString()
  @ApiProperty({
    type: String,
  })
  search?: string;
}
