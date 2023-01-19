const env = process.env;

export const PORT = env.PORT ?? 8080;
export const HOST = env.HOST ?? "0.0.0.0";
export const SERVER_URL = `https://${HOST}:${PORT}`;

export default {
  PORT,
  HOST,
  SERVER_URL,
};

/*
NOTE: If you want to run with a different PORT or HOST when running in local,
    you can do the following.
    >> PORT=3000 HOST='localhost' npm run dev:server
*/
