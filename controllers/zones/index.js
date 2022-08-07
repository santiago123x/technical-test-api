const pool = require("../../conexion");

const getZones = async (req, res) => {
  try {
    const response = await pool.query(`select * from zone`);
    res.status(200).send(response.rows);
  } catch (e) {
    res.status(400);
  }
};

const getAllInfo = async (req, res) => {
  try {
    const zones = await pool.query(`select * from zone`);
    const cattles = await pool.query(`select * from cattle`);
    const data = { zones: zones.rows, cattles: cattles.rows };
    res.status(200).send(data);
  } catch (e) {
    res.status(400);
  }
};


module.exports = {
  getZones,
  getAllInfo,
};
