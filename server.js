const express = require('express');
const app = express();
const port = 3000;

app.get('/health', (req, res) => {
	res.send({
		status: 'OK',
		timestamp: new Date().toISOString(),
	});
});

app.use('*', (req, res) => {
	res.send(
		'<img width="50%" align="center" src="https://plus.unsplash.com/premium_photo-1668116307088-583ee0d4aaf7?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">'
	);
});

app.listen(port, () => {
	console.log(
		`Demo app is up and listening to port: ${port}, PID: ${process.pid}`
	);
});
