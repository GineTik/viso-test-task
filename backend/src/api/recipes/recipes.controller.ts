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
import { ApiResponse } from '@nestjs/swagger';

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
    @Param('id') id: string,
    @Body() body: AddOrUpdateRecipeDto,
  ): Promise<GetRecipeDto> {
    return this.recipesService.update(id, body);
  }

  @Get()
  @ApiResponse({
    type: GetRecipeDto,
    isArray: true,
  })
  findAll(@Query() userId: string): Promise<GetRecipeDto[]> {
    return this.recipesService.findAll(userId);
  }

  @Get(':id')
  @ApiResponse({
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
