const express = require("express");
const { saveapi } = require("../controllers/urlController");

const router = express.Router();

router.post("/saveapi", saveapi);

module.exports = router;
