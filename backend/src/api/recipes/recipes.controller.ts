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
import { AddOrUpdateRecipeDto } from './dto/add-or-update-recipe.dto';
import { GetRecipeDto } from './dto/get-recipe.dto';
import { RateRecipeDto } from './dto/rate-recipe.dto';
import { User } from '@/shared/prisma';
import { SignedUser } from '@/shared/auth/decorators/signed-user.decorator';
import { Auth } from '@/shared/auth/decorators';
import { ApiQuery, ApiResponse } from '@nestjs/swagger';

@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  @Post()
  @Auth()
  @ApiResponse({
    type: GetRecipeDto,
  })
  add(
    @SignedUser() user: User,
    @Body() body: AddOrUpdateRecipeDto,
  ): Promise<GetRecipeDto> {
    return this.recipesService.add(user.id, body);
  }

  @Delete(':id')
  @Auth()
  remove(@Param('id') id: string) {
    return this.recipesService.remove(id);
  }

  @Put(':id')
  @Auth()
  @ApiResponse({
    type: GetRecipeDto,
  })
  update(
    @SignedUser() user: User,
    @Param('id') id: string,
    @Body() body: AddOrUpdateRecipeDto,
  ): Promise<GetRecipeDto> {
    return this.recipesService.update(user.id, id, body);
  }

  @Get()
  @ApiResponse({
    status: 200,
    type: GetRecipeDto,
    isArray: true,
  })
  @ApiQuery({
    name: 'userId',
    required: false,
  })
  @ApiQuery({
    name: 'search',
    required: false,
  })
  findAll(
    @Query('userId') userId: string,
    @Query('search') search: string,
  ): Promise<GetRecipeDto[]> {
    return this.recipesService.findAll({
      userId,
      search,
    });
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    type: GetRecipeDto,
  })
  findOne(@Param('id') id: string): Promise<GetRecipeDto> {
    return this.recipesService.findOne(id);
  }

  @Post(':id/rate')
  @Auth()
  rate(
    @Param('id') id: string,
    @SignedUser() user: User,
    @Body() dto: RateRecipeDto,
  ): Promise<void> {
    return this.recipesService.rate(id, user.id, dto.rating);
  }
}
