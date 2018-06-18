import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import http from 'http';
import morgan from 'morgan';
import config from './config';
import models from './models';

const app = express();
app.server = http.createServer(app);

app.set('models', models);

// logger
app.use(morgan('dev'));

// 3rd party middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.server.listen(config.port, () => {
  // eslint-disable-next-line no-console
  console.log(`Started on port ${app.server.address().port}`);
});

export default app;
