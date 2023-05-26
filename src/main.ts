import { HttpException, HttpStatus, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';
import * as localJson from 'config/local.json';
async function bootstrap(module, port) {
  //Concating "loca.json" with "process.env"
  let localEnv = JSON.parse(JSON.stringify(localJson));
  process.env = { ...localEnv, ...process.env };
  const app = await NestFactory.create(module);

  app.enableCors();

  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  /**
   * Swagger Configuration
   */
  if (process.env.APP['SET_SWAGGER'] === 'true') {
    const config = new DocumentBuilder()
      .setTitle(process.env.APP_NAME || '')
      .setDescription(process.env.APP_DESCRIPTION || '')
      .setVersion(process.env.APP['APP_VERSION'] || '')
      .addBearerAuth()
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
  }

  await app.listen(port);
}
bootstrap(AppModule,3000);
