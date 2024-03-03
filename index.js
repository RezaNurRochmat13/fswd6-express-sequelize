const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.APP_PORT || 8002;

const app = express();

const router = require('./router');

app.use(router);

app.get('/', (req, res) => {
	res.json({ message: 'Ping' });
});

app.listen(PORT, () => {
	console.log(`Server running at localhost:${PORT}`);
});
