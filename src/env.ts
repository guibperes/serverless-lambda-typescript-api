const envToString = (value: string) => process.env[value] ?? '';

export const Env = {
  MONGODB_URL: envToString('MONGODB_URL'),
};
