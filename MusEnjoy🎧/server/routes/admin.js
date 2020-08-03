const router = require('express').Router();
const verify = require('./verifyToken');

router.get('/', verify ,(req, res)=>{
    res.json({
        posts: {
            singer : 'first singer',
            song : 'first song'
        }
    });
});

module.exports = router;