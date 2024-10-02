import { Module } from '@nestjs/common';
import { BookService } from './service/book/book.service';

@Module({
  providers: [BookService]
})
export class LibraryModule {}
