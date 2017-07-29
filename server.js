import config from './config';
import apiRouter from './api';

import express from 'express';
const server = express();

server.get('/', (req, res) => {
	res.send('hello express wat');
});

server.use('/api', apiRouter);
// in prod we should manage static assets seperate from the node server like nginx
server.use(express.static('public'));

server.listen(config.port, () => {
	console.info('Express listening on port', config.port);
});