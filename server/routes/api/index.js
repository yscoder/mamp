const express = require('express')
const router = express.Router()

/* Api */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' })
})

module.exports = router
