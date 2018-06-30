import app from './app';

const { port = 3001 } = process.env;

const server = app.listen(port, () =>
  // eslint-disable-next-line no-console
  console.log(`API server started on ${port}`),
);

export default server;
