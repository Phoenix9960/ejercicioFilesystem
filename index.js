//Imports de los módulos
//fs y path

const fs = require('fs/promises');
const path = require('path');

const pathUser = path.resolve("users.json");

const getUsers = async() => {
    //Leer el archivo
    try {
        const users = await fs.readFile(pathUser, {encoding: "utf-8"});
        return JSON.parse(users);
    } catch (error) {
        console.log(error);
    }
};

const addUser = async (userObj) => {
    try {
        //leer el archivo
        //convertir el contenido en formato JSON
        let users = await getUsers();
    
        //agreagar el usuario en el arreglo
        users = [...users, userObj];
        //sobreescribir el arreglo  en el archivo
        await fs.writeFile(pathUser, JSON.stringify(users));
        //si el proceso se realizo correctamente tendras que regresar el objeto de usuario
        //que acabas de agregar en el archivo
        return userObj;
    } catch (error) {
        console.log(error);
    }
    
};

const clearUsers = async () => {
    try {
        //Vaciar el arreglo y sobreescribir el archivo
        await fs.writeFile( pathUser, JSON.stringify([]) );
        return true
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getUsers,
    addUser,
    clearUsers,
};
