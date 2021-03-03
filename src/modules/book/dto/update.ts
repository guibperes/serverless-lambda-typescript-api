import { ObjectID } from 'mongodb';

export class BookUpdateDTO {
  id!: ObjectID;

  title!: String;

  description!: String;

  pages!: Number;

  static of(body: { id: string }): BookUpdateDTO {
    const bodyWithObjectID = { ...body, id: new ObjectID(body.id) };

    return Object.assign({} as BookUpdateDTO, bodyWithObjectID);
  }
}
