import { Module } from '@nestjs/common';
import { AuthModule } from './api/auth/auth.module';
import { RecipesModule } from './api/recipes/recipes.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    AuthModule,
    RecipesModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
