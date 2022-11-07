import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductSchema } from './products.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsService } from './products.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'products', schema: ProductSchema }]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
