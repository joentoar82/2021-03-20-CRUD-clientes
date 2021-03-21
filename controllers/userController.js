
const User = require('../models/user');

//-----------Función crear (post)

function create(req, res) {
    var user = new User();
    var params = req.body;

    user.firstName = params.firstName;
    user.lastName = params.lastName;
    user.keyCode = params.keyCode;
    user.country = params.country;
    user.city = params.city;
    user.email = params.email;
    user.contact = params.contact;
    user.request = params.request;

    user.save((error, userCreated) => {
        if (error) {
            res.status(500).send({
                statusCode: 500,
                message: "Error en el servidor"
            })
        } else {
            if (!userCreated) {
                res.status(400).send({
                    statusCode: 400,
                    message: "Error al insertar usuario"
                })
            } else {
                res.status(200).send({
                    statusCode: 200,
                    message: "Usuario almacenado correctamente",
                    dataUser: userCreated
                })
            }
        }
    })
}

//-------------------Metodo para moficar datos (put)

function update(req, res) {
    var parameters = req.body;
    var idUser = req.params.idUser;

    User.findByIdAndUpdate(idUser, parameters, (error, userUdated) => {
        if (error) {
            res.status(500).send({
                statusCode: 500,
                message: "Error en el servidor"
            })
        } else {
            if (!userUdated) {
                res.statusCode(400).send({
                    statusCode: 400,
                    message: "Error al actualizar usuario"
                })
            } else {
                res.status(200).send({
                    statusCode: 200,
                    message: "Usuario actualizado correctamente"
                })
            }
        }
    })
}

//--------------Metodo eliminar (delete)

function remove(req, res) {
    var idUser = req.params.idUser;

    User.findByIdAndDelete(idUser, (error, userRemoved) => {
        if (error) {
            res.status(500).send({
                statusCode: 500,
                message: "Error en el servidor"
            })
        } else {
            if (!userRemoved) {
                res.statusCode(400).send({
                    statusCode: 400,
                    message: "Error al eliminar el usuario"
                })
            } else {
                res.status(200).send({
                    statusCode: 200,
                    message: "Usuario se eliminó correctamente"
                })
            }
        }
    })
}


//------------Metodo para obtener a todos los usuarios (get)

function getAllUsers(req, res) {
    User.find({}, (error, allUsers) => {
        if (error) {
            res.status(500).send({
                statusCode: 500,
                message: "Error en el servidor"
            })
        } else {
            res.status(200).send({
                statusCode: 200,
                message: "Todos los usuarios",
                allUsers: allUsers
            })
        }
    })
}



module.exports = {
    create,
    update,
    remove,
    getAllUsers
}