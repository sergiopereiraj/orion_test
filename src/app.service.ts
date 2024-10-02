import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getLibros(): string {
    return 'get libros';
  }
  getAutores(): string {
    return 'get autores!';
  }
  postLibro(): string {
    return 'crear libro';
  }
  postAutor(): string {
    return 'crear Autor';
  }
  getPromedio(): string {
    return 'Promedio paginas';
  }
}

