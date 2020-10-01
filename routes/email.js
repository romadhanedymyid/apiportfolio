const express           = require('express'),
router                  = express.Router(),
controller              = require('../controllers/emailController')

router.post('/', controller.sendMail)

module.exports = router