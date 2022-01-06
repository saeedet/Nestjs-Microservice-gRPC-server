import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { grpcOptions } from './grpc.options';

const logger = new Logger('Main');
async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, grpcOptions);
  await app.listen();
  logger.log(`Microservice is listening on ${process.env.GRPC_URL}`);
}
bootstrap();
