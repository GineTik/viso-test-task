import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configSwagger } from './shared/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  configSwagger(app);

  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
