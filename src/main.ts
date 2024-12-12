import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';
import serverless from 'serverless-http';

let app;

async function bootstrap() {
  const server = express();
  app = await NestFactory.create(AppModule, new ExpressAdapter(server));
  app.enableCors();
  await app.listen(3000);
}

bootstrap();

export const handler = async (event: any, context: any) => {
  if (!app) {
    await bootstrap(); // Ensure the app is initialized before handling requests
  }
  return serverless(app)(event, context); // Handle serverless requests
};