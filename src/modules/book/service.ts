import { Database } from '../../database';
import { BookRepository } from './repository';
import { Book } from './entity';
import { BookCreateDTO, BookUpdateDTO } from './dto';

const getBookRepository = () => Database.getRepository(BookRepository);

const create = async (bookDTO: BookCreateDTO): Promise<Book> => {
  const repository = getBookRepository();

  const book = Book.of(bookDTO);
  const savedBook = await repository.save(book);

  return savedBook;
};

const findAll = async (): Promise<Book[]> => {
  const repository = getBookRepository();

  const books = await repository.find();

  return books;
};

const findById = async (id: string): Promise<Book | undefined> => {
  const repository = getBookRepository();

  const book = await repository.findOne(id);

  return book;
};

const updateById = async (bookDTO: BookUpdateDTO): Promise<Book> => {
  const repository = getBookRepository();

  const book = Book.of(bookDTO);
  const updatedBook = await repository.save(book);

  return updatedBook;
};

const deleteById = async (id: string): Promise<void> => {
  const repository = getBookRepository();

  await repository.delete(id);
};

export const BookService = {
  create,
  findAll,
  findById,
  updateById,
  deleteById,
};
