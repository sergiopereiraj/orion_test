import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LibraryModule } from './library/library.module';
import { DatabaseModule } from './modules/database/database.module';
import { LibraryModule } from './modules/library/library.module';

@Module({
  imports: [LibraryModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
