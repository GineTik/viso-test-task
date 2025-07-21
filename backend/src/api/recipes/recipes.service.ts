import { Recipe, RecipeRating } from '@/shared/prisma';
import { PrismaService } from '@/shared/prisma';
import { Injectable } from '@nestjs/common';
import { AddOrUpdateRecipeDto } from './dto/add-or-update-recipe.dto';
import { GetRecipeDto } from './dto/get-recipe.dto';

@Injectable()
export class RecipesService {
  constructor(private readonly prisma: PrismaService) {}

  async add(
    authorId: string,
    dto: AddOrUpdateRecipeDto,
  ): Promise<GetRecipeDto> {
    const recipe = await this.prisma.recipe.create({
      data: {
        ...dto,
        author: {
          connect: {
            id: authorId,
          },
        },
      },
      include: {
        ratings: true,
      },
    });

    return this.mapRecipeToGetRecipeDto(recipe);
  }

  async remove(id: string): Promise<Recipe> {
    return await this.prisma.recipe.delete({
      where: {
        id,
      },
    });
  }

  async update(id: string, dto: AddOrUpdateRecipeDto): Promise<GetRecipeDto> {
    const recipe = await this.prisma.recipe.update({
      where: {
        id,
      },
      data: dto,
      include: {
        ratings: true,
      },
    });

    return this.mapRecipeToGetRecipeDto(recipe);
  }

  async findAll(userId: string): Promise<GetRecipeDto[]> {
    const recipes = await this.prisma.recipe.findMany({
      where: {
        authorId: userId,
      },
      include: {
        ratings: true,
      },
    });

    return recipes.map((r) => this.mapRecipeToGetRecipeDto(r));
  }

  async findOne(id: string): Promise<GetRecipeDto> {
    const recipe = await this.prisma.recipe.findUniqueOrThrow({
      where: {
        id,
      },
      include: {
        ratings: true,
      },
    });

    return this.mapRecipeToGetRecipeDto(recipe);
  }

  async rate(id: string, userId: string, rating: number): Promise<void> {
    await this.prisma.recipeRating.upsert({
      where: {
        recipeId_userId: {
          recipeId: id,
          userId,
        },
      },
      update: {
        rating,
      },
      create: {
        rating,
        recipe: {
          connect: {
            id,
          },
        },
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
  }

  mapRecipeToGetRecipeDto(
    recipe: Recipe & { ratings: RecipeRating[] },
  ): GetRecipeDto {
    return {
      ...recipe,
      rating:
        recipe.ratings.reduce((acc, curr) => acc + curr.rating, 0) /
        recipe.ratings.length,
    };
  }
}
