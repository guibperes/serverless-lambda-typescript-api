import 'reflect-metadata';

import { Http } from './libs';
import { Env } from './env';

export const hello = async () =>
  Http.send({ result: { message: 'Hello World', test: Env.MONGODB_URL } });

export const error = async () =>
  Http.sendError({ message: 'Bad Request', statusCode: 400 });
