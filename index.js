//Imports de los módulos
//fs y path

const fs = require('fs');
const path = require('path');

const getUsers = async() => {
    //Leer el archivo
    const users = '';
    fs.readFile('users.json', {encoding: 'utf8'}, (err, data) => {
        if(!err){
            users = data;
        }else {
            console.log(err);
        }
    });

    return users;
    //Regresar el arreglo de usuarios como objeto literal Javascript (sin notación JSON)
};

const addUser = async (userObj) => {
    //leer el archivo
    let users = [];
    fs.readFile('users.json', {encoding: 'utf8'}, (err, data) => {
        if(!err){
            //convertir el contenido en formato JSON en un objeto JS
            users = JSON.parse(data);
            //agregar el usuario en el arreglo
            users = [...users, userObj];

            //sobreescribir el arreglo en el archivo
            fs.writeFile('users.json',JSON.stringify(users), (err) => {
                if(!err) {
                    //si el proceso se realizó correctamente tendrás que regresar el objeto de usuario
                    //que acabas de agregar en el arreglo
                    return userObj;
                } else {
                    console.log(err);
                }
            });
        }else {
            console.log(err);
        }
    });    
};

const clearUsers = async () => {
    //Vaciar el arreglo y sobreescribir el archivo
    fs.writeFile('users.json', '[]', (err) => {
        if(!err) {
            return true;
        } else {
            console.log(err);
        }
    });

    //Si el proceso se realizó correctamente tendrás que regresar true
}



module.exports = {
    getUsers,
    addUser,
    clearUsers,
};
