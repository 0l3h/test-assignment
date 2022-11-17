const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 5000;

app.disable('x-powered-by');

app.use(express.static(path.resolve(__dirname + '/../client/')));

app.get('/', () => {});
app.post('/', () => {});
app.patch('/', () => {});
app.delete('/', () => {});

app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});