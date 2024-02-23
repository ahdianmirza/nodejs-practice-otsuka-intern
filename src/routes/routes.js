const express = require('express');
const router = express.Router();

const masterRoutes = require('./master_routes/master.routes');

// master data routes usage
router.use('/master/', masterRoutes);

module.exports = router;