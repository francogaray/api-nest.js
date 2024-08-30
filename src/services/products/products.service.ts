import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from 'src/entities/product.entity';

import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dtos';
@Injectable()
export class ProductsService {
  private counterId = 1;
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: ' Description of Product 1',
      image: 'url image',
      stock: 12,
      price: 123,
    },
    {
      id: 2,
      name: 'Product 2',
      description: ' Description of Product 1',
      image: 'url image',
      stock: 12,
      price: 123,
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find((product) => product.id == id);

    if (!product) {
      throw new NotFoundException(`Product ${id} not found`);
    }

    return product;
  }

  create(payload: CreateProductDto) {
    this.counterId = this.counterId + 1;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };

    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: UpdateProductDto) {
    const product = this.findOne(id);

    if (product) {
      const index = this.products.findIndex((product) => product.id == id);

      this.products[index] = { id, ...product, ...payload };
      return this.products[index];
    }
    return null;
  }
  remove(id: number) {
    const index = this.products.findIndex((product) => product.id == id);

    if (index === -1) {
      throw new NotFoundException(`Product ${id} not found`);
    }
    this.products.splice(index, 1);

    return true;
  }
}
