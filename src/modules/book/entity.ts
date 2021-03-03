import { Entity, Column } from 'typeorm';

import { BaseEntity } from '../../base';
import { BookCreateDTO, BookUpdateDTO } from './dto';

@Entity()
export class Book extends BaseEntity {
  @Column()
  title!: String;

  @Column()
  description!: String;

  @Column()
  pages!: Number;

  static of(dto: BookCreateDTO | BookUpdateDTO): Book {
    return Object.assign({} as Book, dto);
  }
}
