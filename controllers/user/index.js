const pool = require("../../conexion");

const getUsuarioNick = async (req, res) => {
  try {
    const { email, password } = req.body;
    const response = await pool.query(
      `select * from users where email = '${email}'`
    );
    if (response && response.rows && response.rows[0]) {
      if (password === response.rows[0].password) {
        const token = 'sakdnajshdjasd'
        const send = {
          user: response.rows[0].email,
          token: token,
          isAuth: true,
        };
        res.status(200).send(send);
      }
    } else {
      const send = {
        user: null,
        token: null,
        isAuth: false,
      };
      res.status(200).send(send);
    }
  } catch (e) {
    console.log(e);
    res.status(400);
  }
};

module.exports = {
  getUsuarioNick,
};
