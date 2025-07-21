import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';
import * as fs from 'fs';

export function configSwagger(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('API')
    .setDescription('API description')
    .setVersion('1.0')
    .addBearerAuth()
    .addSecurityRequirements('bearer')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  fs.writeFileSync('openapi.json', JSON.stringify(document, null, 2));
  SwaggerModule.setup('api', app, document);
}
