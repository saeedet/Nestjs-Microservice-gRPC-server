import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LikesModule } from './likes/likes.module';
import { RatingModule } from './rating/rating.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    LikesModule,
    RatingModule,
  ],
})
export class AppModule {}
