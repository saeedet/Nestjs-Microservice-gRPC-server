import { Metadata } from '@grpc/grpc-js';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { MovieId } from './interfaces/MovieId.interface';
import { MovieRating } from './interfaces/MovieRating.interface';
import { RatingService } from './rating.service';

@Controller()
export class RatingController {
  constructor(private readonly ratingsService: RatingService) {}

  @GrpcMethod('RatingService', 'FindOne')
  findOne({ id }: MovieId, metadata: Metadata): MovieRating {
    return this.ratingsService.findOne(+id);
  }
}
