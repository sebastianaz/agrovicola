const {Router} = require('express');
const router = Router();
const {renderAbout,
    renderIndex,
    renderHuevos,
    renderCarnes,
    renderBiogas
} = require('../controllers/index.controller')

const {logout,renderSignInForm,signIn,createUser,signUpUserForm} = require('../controllers/users.controlers')

router.get('/',renderIndex)
router.get('/about',renderAbout)
router.get('/huevos',renderHuevos)
router.get('/carnes',renderCarnes);
router.get('/biogas',renderBiogas)

router.get('/signin',renderSignInForm);
router.post('/signin',signIn);

router.get('/logout',logout)

router.get('/signup', signUpUserForm)
router.post('/signup',createUser)

module.exports = router;