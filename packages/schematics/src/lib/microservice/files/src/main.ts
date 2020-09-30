import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { WinstonLogger } from './app/shared/logger/winston.logger';
import { ValidationPipe } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.createMicroservice(AppModule, {
    logger: new WinstonLogger(),
    transport: Transport.TCP,
  });
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  app.listen(() => console.log('Microservice is listening'));
}
bootstrap();
