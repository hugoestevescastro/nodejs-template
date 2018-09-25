const express = require('express');
const root = require('./controller');
const router = express.Router();

router.route('/')
    .get(root.root);
    
module.exports = router;