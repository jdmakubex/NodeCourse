
const { Router } = require ('express');

const router = Router();



router.get('/');

router.put('/', (req, res) => {
    res.json({
        msg: 'put API'
    });
});

router.post('/', (req, res) => {
    res.json({
        msg: 'post API'
    });
});

router.delete('/', (req, res) => {
    res.json({
        msg: 'delete API'
    });
});

router.patch('/', (req, res) => {
    res.json({
        msg: 'delete API'
    });
});







module.exports = router;