import { Http } from './libs';

export const hello = async () =>
  Http.send({
    result: { message: 'Hello World', test: true },
    sendCORSHeaders: true,
  });

export const error = async () =>
  Http.sendError({
    message: 'Bad Request',
    statusCode: 400,
    sendCORSHeaders: true,
  });
