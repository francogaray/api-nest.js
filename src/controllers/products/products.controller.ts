import {
  Controller,
  Get,
  Param,
  Post,
  Query,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  Res,
  //ParseIntPipe,
} from '@nestjs/common';

import { Response } from 'express';
import { ParseIntPipe } from '../../common/parse-int/parse-int.pipe';
import { CreateProductDto, UpdateeProductDto } from '../../dtos/products.dtos';

import { ProductsService } from '../../services/products/products.service';
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getAllProducts() {
    return {
      message: 'Estos son los productos',
      data: this.productsService.findAll(),
    };
  }
  @Get('filter')
  filtrandoProductos(
    @Query('limit') limit: number = 5,
    @Query('offset') offset: number = 2,
  ) {
    return {
      message: 'Este es el filtrado de productos',
      limit: limit,
      offset: offset,
    };
  }

  @Get(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  getProductById(
    @Res() response: Response,
    @Param('id', ParseIntPipe) id: number,
  ) {
    response.status(200).send({
      message: `Este es el producto encontrado con id: ${id}`,
      data: this.productsService.findOne(id),
    });
  }

  @Post()
  create(@Body() payload: CreateProductDto) {
    return {
      message: 'Producto creado correctamente',
      payload: this.productsService.create(payload),
    };
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateeProductDto) {
    this.productsService.update(+id, payload);
    return {
      message: `Producto actualizado correctamente correspondiente al ID ${id}`,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return {
      message: 'Producto eliminado correctamente',
      data: this.productsService.remove(+id),
    };
  }
}
