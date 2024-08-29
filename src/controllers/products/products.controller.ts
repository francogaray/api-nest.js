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
} from '@nestjs/common';

import { Response } from 'express';
@Controller('products')
export class ProductsController {
  @Get('')
  getAllProducts() {
    return 'Estos son los productos';
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
  getProductById(@Res() response: Response, @Param('id') id: string) {
    response.status(200).send({
      message: `Este es el producto encontrado con id: ${id}`,
    });
  }

  @Post()
  create(@Body() product: any) {
    console.log(product);
    return { message: 'Producto creado correctamente', product };
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: any) {
    return {
      message: `Producto actualizado correctamente correspondiente al ID ${id}`,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return { message: 'Producto eliminado correctamente', id };
  }
}
