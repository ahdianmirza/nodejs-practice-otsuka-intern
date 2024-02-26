const express = require('express');
const router = express.Router();
const path = require('path');

const masterRoutes = require('./master_routes/master.routes');
const auth_routes = require('./utility_routes/auth.routes');
const {verifyToken} = require('../services/auth.service');

// not found route
router.get('/not-found', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, './../views/not-found.html'));
});

// authentication routes usage
router.use('/auth/', auth_routes);

// master data routes usage
router.use('/master/', verifyToken, masterRoutes);

module.exports = router;