const pool = require('./../utils/bd');
const T_PERSONA = "persona"

const create = (obj) =>
    pool
    .query("INSERT INTO ?? SET ?", [T_PERSONA, obj])
    .then((response) => response)
    .catch((e) => console.log(e));

module.exports = { create };