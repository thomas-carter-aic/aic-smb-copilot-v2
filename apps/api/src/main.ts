import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [/^http:\/\/localhost:\d+$/],
    credentials: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidUnknownValues: false,
    }),
  );

  // OpenAPI (Swagger)
  const config = new DocumentBuilder()
    .setTitle('aic-smb-copilot-v2')
    .setDescription('Hybrid REST API for SMB Copilot (REST only; GraphQL schema in docs/graphql)')
    .setVersion('0.1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/docs', app, document);

  const port = process.env.API_PORT ? Number(process.env.API_PORT) : 8080;
  await app.listen(port);
  // eslint-disable-next-line no-console
  console.log(`🚀 API listening on http://localhost:${port}  (Swagger: /docs)`);
}
bootstrap();
