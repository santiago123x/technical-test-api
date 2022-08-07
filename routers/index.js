const Router = require("express-promise-router");
const router = new Router();


const {
  getCattle,
} = require("../controllers/cattle");

const {
  getZones,
  getAllInfo,
} = require("../controllers/zones");

const {
  getUsuarioNick
} = require("../controllers/user");


//User

router.post("/login", getUsuarioNick);



//Cattles

router.get("/cattle", getCattle);



//Zones

router.get("/zones", getZones);


//Info
router.get("/allInfo", getAllInfo);


module.exports = router;
