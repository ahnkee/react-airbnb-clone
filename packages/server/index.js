import server from './server';
import config from './config';

server.listen(config.port, () =>
  // eslint-disable-next-line no-console
  console.log(`API server started on ${config.port}`),
);
