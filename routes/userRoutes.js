
const express = require('express');
const userController = require('../controllers/userController');

const api = express.Router();

api.get( '/info', (req, res) => {
   console.log('LLego  a la ruta info...');
});

api.post('/', userController.create);
api.put('/:idUser', userController.update);
api.delete('/:idUser', userController.remove);
api.get('/allUser', userController.getAllUsers);

module.exports = api;