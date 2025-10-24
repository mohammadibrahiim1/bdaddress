const express = require("express");
const { createDivision } = require("../controller/division.controller");
const router = express.Router();

router.post("/post", createDivision);

module.exports = router;
