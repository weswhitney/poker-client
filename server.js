import config from './config';
import apiRouter from './api';

import express from 'express';
const server = express();

server.set('view engine', 'ejs'); // by default express will look for a views folder

server.get('/', (req, res) => {
	res.render('index', {
		content: 'Hello express and <em>ejs!</em>'
	});
});

server.use('/api', apiRouter);
// in prod we should manage static assets seperate from the node server like nginx
server.use(express.static('public'));

server.listen(config.port, () => {
	console.info('Express listening on port', config.port);
});
