const env = process.env;

export const PORT = env.PORT ?? 8080;
export const HOST = env.HOST ?? "0.0.0.0";
export const SERVER_URL = `http://${HOST}:${PORT}`;

export const MONGODB_URI =
  env.MONGODB_URI ?? "mongodb://localhost:27017";
export const DATABASE_NAME = env.DATABASE_NAME ?? "local";

export default {
  PORT,
  HOST,
  SERVER_URL,
  MONGODB_URI,
  DATABASE_NAME,
};

/*
NOTE: If you want to run with a different PORT or HOST when running in local,
    you can do the following.
    >> PORT=3000 HOST='localhost' npm run dev:server
*/
