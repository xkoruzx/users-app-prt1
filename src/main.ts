import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3000);
}

bootstrap();

// Export serverless handler for Vercel
export default async function (req, res) {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  // Manually handle the request using NestJS
  return app.getHttpAdapter().getInstance().handle(req, res);
}
