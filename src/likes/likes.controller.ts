import { Metadata } from '@grpc/grpc-js';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { MovieId } from './interfaces/MovieId.interface';
import { MovieLikes } from './interfaces/MovieLikes.interface';
import { LikesService } from './likes.service';

@Controller()
export class LikesController {
  constructor(private readonly likesService: LikesService) {}

  @GrpcMethod('LikesService', 'FindOne')
  findOne({ id }: MovieId, metadata: Metadata): MovieLikes {
    return this.likesService.findOne(+id);
  }
}
