import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class AddRecipeDto {
  @ApiProperty({
    description: 'The name of the recipe',
    example: 'Recipe Name',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'The description of the recipe',
    example: 'Recipe Description',
  })
  @IsString()
  @IsNotEmpty()
  description: string;
}
