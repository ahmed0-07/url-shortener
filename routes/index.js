const router = require('express').Router();
const controller = require('../controllers/Url-controler');

// home page
router.get('/', controller.get_home);

router.post('/', controller.add_url);

module.exports = router;
