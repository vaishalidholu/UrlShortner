const express = require("express");
const { saveapi } = require("../controllers/urlController");

const router = express.Router();

router.post("/saveapi-sanjay", saveapi);

module.exports = router;
