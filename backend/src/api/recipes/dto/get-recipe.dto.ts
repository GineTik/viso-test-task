import { ApiProperty } from '@nestjs/swagger';

export class GetRecipeDto {
  @ApiProperty({
    example: '123',
  })
  id: string;

  @ApiProperty({
    example: 'Recipe Name',
  })
  name: string;

  @ApiProperty({
    example: 'Recipe Description',
  })
  description: string;

  @ApiProperty({
    example: 4.5,
  })
  rating: number;

  @ApiProperty({
    example: 4,
    required: false,
  })
  myRating?: number;
}
