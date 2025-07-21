import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class RateRecipeDto {
  @ApiProperty({
    description: 'The rating of the recipe',
    example: 4.5,
  })
  @IsNumber()
  rating: number;
}
