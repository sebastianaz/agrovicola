const {Router} = require('express');
const router = Router();
const {renderAbout,
    renderIndex,
    renderHuevos,
    renderCarnes,
    renderBiogas
} = require('../controllers/index.controller')

router.get('/',renderIndex)
router.get('/about',renderAbout)
router.get('/huevos',renderHuevos)
router.get('/carnes',renderCarnes)
router.get('/biogas',renderBiogas)



module.exports = router;