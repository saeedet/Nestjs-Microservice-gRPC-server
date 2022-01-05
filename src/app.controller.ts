import { Controller, Get, Logger } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { AppService } from './app.service';
import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { Hero, HeroById } from './types/heroTypes';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  private logger = new Logger('AppController');

  @GrpcMethod('HeroService', 'FindOne')
  findOne(data: HeroById, metadata: Metadata): Hero {
    const { id } = data;
    this.logger.log('Server called with id: ' + id);
    return this.appService.findOne(+id);
  }
}
