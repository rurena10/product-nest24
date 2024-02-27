import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { constants } from 'buffer';

@Injectable()
export class ProductsService {

  private products: Product[] =[
    {
      id: 1,
      name: 'coke'
    },
    {
      id: 2,
      name: 'pepsi'
    }
  ]
  create(createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find(Product => Product.id === id);
    if (!product) throw new Error('Producto no encontrado');
    return product;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
