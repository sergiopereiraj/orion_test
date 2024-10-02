import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('libros')
  getLibro(): string{
    return this.appService.getLibros();
  }
  @Get('autores')
  getAutor(): string{
    return this.appService.getAutores();
  }
  @Post('nuevo-libro')
  postLibro(): string{
    return this.appService.postLibro();
  }
  @Post('nuevo-autor')
  postAutor(): string{
    return this.appService.postAutor();
  }
  @Get('promedio-paginas-autor')
  getPromedio(): string{
    return this.appService.getPromedio();
  }
}
