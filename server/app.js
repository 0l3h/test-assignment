const express = require('express');
const path = require('path');
const { 
    getAllUsers, 
    createUser,
    updateUsername, 
    changeRank, 
    deleteUser 
} = require('./controllers/user.controller');

const app = express();

const port = process.env.PORT || 5000;

app.disable('x-powered-by');

app.use(express.static(path.resolve(__dirname + '/../client/')));
app.use(express.json());

app.get('/get-users', getAllUsers);
app.post('/create-user', createUser);
app.patch('/update-username/:id', updateUsername);
app.patch('/change-rank/:id', changeRank);
app.delete('/delete-user/:id', deleteUser);

app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});