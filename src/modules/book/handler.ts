import { Database } from '../../database';
import { Http } from '../../libs';
import { BookService } from './service';

export const findAll = async () => {
  await Database.connect();
  const response = await BookService.findAll();
  await Database.disconnect();

  return Http.send({ result: response });
};
