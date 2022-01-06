import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const grpcOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: ['likes', 'rating'],
    protoPath: [
      join(__dirname, './likes/likes.proto'),
      join(__dirname, './rating/rating.proto'),
    ],
    url: process.env.GRPC_URL,
  },
};
