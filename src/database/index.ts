import 'reflect-metadata';
import { ConnectionManager, ObjectType } from 'typeorm';

import { Env } from '../env';
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

    console.log('Connected on database');
  } catch (error) {
    console.log('Cannot connect on database');
    console.log(error);
  }
};

const disconnect = async () => {
  try {
    const connection = getConnection();
    await connection.close();

    console.log('Disconnected on database');
  } catch (error) {
    console.log('Cannot disconnect on database');
    console.log(error);
  }
};

export const Database = { getConnection, getRepository, connect, disconnect };
