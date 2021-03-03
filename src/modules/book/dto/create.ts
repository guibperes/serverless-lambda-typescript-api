export class BookCreateDTO {
  title!: String;

  description!: String;

  pages!: Number;

  static of(body: object): BookCreateDTO {
    return Object.assign({} as BookCreateDTO, body);
  }
}
