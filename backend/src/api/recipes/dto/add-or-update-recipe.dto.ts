import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class AddOrUpdateRecipeDto {
  @ApiProperty({
    example: 'Recipe Name',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'Recipe Description',
  })
  @IsString()
  @IsNotEmpty()
  description: string;
}
