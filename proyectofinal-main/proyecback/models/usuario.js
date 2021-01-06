const pool = require('./../utils/bd');
const T_USUARIO = "usuarios";

const create = (obj) => 
    pool
    .query("INSERT INTO ?? SET ?", [T_USUARIO, obj])
    .then(result => result)
    .catch((e) => e);

module.exports = { create };