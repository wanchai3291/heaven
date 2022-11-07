import { Injectable } from '@nestjs/common';
import { Product, ProductDocument, ProductSchema } from './products.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('products')
    private readonly productModel: Model<ProductDocument>,
  ) {}
  async all() {
    return await this.productModel.find().exec();
  }
  async create(data: Product) {
    return await this.productModel.create(data);
  }
}
