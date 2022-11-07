import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  const productsService = await app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: [
        'amqps://iiayzgkr:MVmi8W2YEcJw_Gr5ArgAXTHt6SPZjmMO@armadillo.rmq.cloudamqp.com/iiayzgkr',
      ],
      queue: 'heaven_queue',
      queueOptions: {
        durable: false,
      },
    },
  });
  await productsService.listen();
  await app.listen(3000);
}
bootstrap();
