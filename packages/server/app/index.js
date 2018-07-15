import 'dotenv/config';
import app from './server';

const { PORT: port = 3000 } = process.env;

const server = app.listen(port, () =>
  // eslint-disable-next-line no-console
  console.log(`API server started on ${port}`),
);

export default server;
