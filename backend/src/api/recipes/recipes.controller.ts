import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { AddRecipeDto } from './dto/add-recipe.dto';
import { GetRecipeDto } from './dto/get-recipe.dto';
import { RateRecipeDto } from './dto/rate-recipe.dto';

@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  @Post()
  add(@Body() body: AddRecipeDto): Promise<GetRecipeDto> {
    return this.recipesService.addRecipe(body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recipesService.removeRecipe(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() body: AddRecipeDto,
  ): Promise<GetRecipeDto> {
    return this.recipesService.updateRecipe(id, body);
  }

  @Get()
  findAll(@Query() userId: string): Promise<GetRecipeDto[]> {
    return this.recipesService.findAll(userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<GetRecipeDto> {
    return this.recipesService.findOne(id);
  }

  @Post(':id/rate')
  rate(
    @Param('id') id: string,
    @Query() rating: RateRecipeDto,
  ): Promise<GetRecipeDto> {
    return this.recipesService.rateRecipe(id, rating);
  }
}
