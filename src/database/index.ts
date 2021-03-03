import 'reflect-metadata';
import { ConnectionManager, ObjectType } from 'typeorm';

import { Env } from '../env';
import { logger } from '../libs';
import { entities } from './entities';

const manager = new ConnectionManager();

const createConnection = () =>
  manager.create({
    type: 'mongodb',
    url: Env.MONGODB_URL,
    synchronize: false,
    useUnifiedTopology: true,
    entities,
  });

const getConnection = () =>
  manager.has('default') ? manager.get() : createConnection();

const getRepository = <T>(entityType: ObjectType<T>) =>
  getConnection().getCustomRepository(entityType);

const connect = async () => {
  try {
    const connection = getConnection();
    await connection.connect();

    logger.info('Connected on database');
  } catch (error) {
    logger.error('Cannot connect on database');
    logger.error(error);
  }
};

const disconnect = async () => {
  try {
    const connection = getConnection();
    await connection.close();

    logger.info('Disconnected on database');
  } catch (error) {
    logger.error('Cannot disconnect on database');
    logger.error(error);
  }
};

export const Database = { getConnection, getRepository, connect, disconnect };
