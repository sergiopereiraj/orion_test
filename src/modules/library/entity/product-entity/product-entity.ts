import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Book {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    tile: string;

    @Column()
    chapters: number;

    @Column()
    pages: number;
}

@Entity()
export class Author {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    nombre: string
}
