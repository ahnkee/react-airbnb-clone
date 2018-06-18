import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import http from 'http';
import morgan from 'morgan';
import connectToDb from './db';
import config from './config';

const app = express();
app.server = http.createServer(app);

// logger
app.use(morgan('dev'));

// 3rd party middleware
app.use(cors());
app.use(bodyParser.json());

connectToDb((err, db) => {
  if (err) {
    // eslint-disable-next-line no-console
    console.error('Unable to connect to the database', err);
    process.exitCode = 1;
    return;
  }

  app.server.listen(config.port, () => {
    // eslint-disable-next-line no-console
    console.log(`Started on port ${app.server.address().port}`);
  });
});

export default app;
