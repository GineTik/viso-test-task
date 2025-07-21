import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class RateRecipeDto {
  @ApiProperty({
    example: 4.5,
  })
  @IsNumber()
  rating: number;
}
