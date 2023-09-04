const { Router } = require('express');
const { peticionesGet, detenerIntervalo } = require('../controllers/peticionesController');

const router = Router();


router.get('/:id', peticionesGet);
router.get('/stop/:id', detenerIntervalo);

module.exports = router;