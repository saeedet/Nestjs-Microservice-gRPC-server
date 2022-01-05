import { Injectable } from '@nestjs/common';
import { Hero } from './types/heroTypes';

@Injectable()
export class AppService {
  private readonly items = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Doe' },
  ];

  findOne(id: number): Hero {
    return this.items.find((hero) => hero.id === id);
  }
}
