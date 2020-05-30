const express = require('express');
const morgan = require('morgan');
const app = express();

const port = process.env.PORT || 5000;

app.use(morgan('combined'));

app.listen(port, () => {
	console.log(`Server listening on ${port}`);
});
