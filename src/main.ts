import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { grpcClientOptions } from './grpc-config.options';

const logger = new Logger('Main');
async function bootstrap() {
  const app = await NestFactory.createMicroservice(
    AppModule,
    grpcClientOptions,
  );
  await app.listen();
  logger.log('Microservice is listening...');
  // app.connectMicroservice<MicroserviceOptions>(grpcClientOptions);

  // await app.startAllMicroservices();
  // await app.listen(process.env.APPLICATION_PORT);

  // console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
