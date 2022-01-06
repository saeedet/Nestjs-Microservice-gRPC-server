import { Injectable } from '@nestjs/common';
import { MovieRating } from './interfaces/MovieRating.interface';

@Injectable()
export class RatingService {
  private ratings = [
    {
      movieId: 1,
      rating: 8,
    },
    {
      movieId: 2,
      rating: 7,
    },
    {
      movieId: 3,
      rating: 9,
    },
    {
      movieId: 4,
      rating: 5,
    },
  ];

  findOne(id: number): MovieRating {
    const { rating } = this.ratings.find(({ movieId }) => movieId === id);
    return { rating };
  }
}
