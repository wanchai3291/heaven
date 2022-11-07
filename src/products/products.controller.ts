import { Controller, Get, Inject } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { ProductsService } from '../products/products.service';
import { Product } from './products.schema';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  list(): Promise<Product[]> {
    return this.productsService.all();
  }

  @EventPattern('product_created')
  async create(product: any) {
    return await this.productsService.create(product);
  }
}
