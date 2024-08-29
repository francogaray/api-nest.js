import { Controller, Get, Param, Query } from '@nestjs/common';

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
  getProductById(@Param('id') id: string) {
    return `Este es el producto encontrado con id: ${id}`;
  }
}
