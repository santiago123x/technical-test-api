const pool = require("../../conexion");

const getCattle = async (req, res) => {
  try {
    const response = await pool.query(`select * from cattle`);
    res.status(200).send(response.rows);
  } catch (e) {
    res.status(400);
  }
};


module.exports = {
  getCattle,
};
