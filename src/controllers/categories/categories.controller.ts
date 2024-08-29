import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get(':category')
  obtenerProductoPorIdYCategoria(@Param('category') category: string) {
    return `Este la categoria: ${category}`;
  }
}
