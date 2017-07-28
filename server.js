import http from 'http';

// using https module as a client:

// https.get('https://www.lynda.com', res => {
// 	console.log("response status code: ", res.statusCode);

// 	res.on('data', chunk => {
// 		console.log(chunk.toString());
// 	});
// });

const server = http.createServer((req, res) => {
	res.write('Hello\n');
	setTimeout(() => {
		res.write('I can stream!\n');
		res.end();
	}, 3000);
});

server.listen(8080);

server.on('request');


