import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from '../library/entity/product-entity/product-entity';
import { Author } from '../library/entity/product-entity/product-entity';


@Module({
    imports:[
        TypeOrmModule.forRoot({
            type:'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '12345',
            database: 'library',
            entities:[ Book, Author
            ],
            synchronize: true

        })
    ]

})
export class DatabaseModule {}
