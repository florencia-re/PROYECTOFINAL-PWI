const pool = require("./../utils/bd");
const T_RESERVAS = "reservas";
const T_CABAÑAS = "cabañas";

const get = async () => {
    const query = "SELECT re.idCabañas as numeroCabaña, fechaInicio, fechaFin, precio, idReservas FROM ?? as re JOIN ?? as ca on re.idCabañas = ca.idCabañas where re.habilitado = ?";
    const params = [T_RESERVAS, T_CABAÑAS, true];
    return await pool.query(query, params);
}; 

const single = async (idReservas) => {
    const query = "SELECT re.idCabañas as numeroCabaña, fechaInicio, fechaFin, precio, idReservas FROM ?? as re JOIN ?? as ca on re.idCabañas = ca.idCabañas where re.habilitado = ? and re.idReservas = ?";
    const params = [T_RESERVAS, T_CABAÑAS, true, idReservas];
    return await pool.query(query, params);
};

const create = (obj) =>
  pool
    .query("INSERT INTO ?? SET ?", [T_RESERVAS, obj])
    .then((response) => response)
    .catch((e) => console.log(e));

module.exports = { get, single, create };