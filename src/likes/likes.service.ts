import { Injectable } from '@nestjs/common';
import { MovieLikes } from './interfaces/MovieLikes.interface';

@Injectable()
export class LikesService {
  private likes = [
    {
      movieId: 1,
      likes: 32,
    },
    {
      movieId: 2,
      likes: 12,
    },
    {
      movieId: 3,
      likes: 55,
    },
    {
      movieId: 4,
      likes: 6,
    },
  ];

  findOne(id: number): MovieLikes {
    const { likes } = this.likes.find(({ movieId }) => movieId === id);
    return { likes };
  }
}
