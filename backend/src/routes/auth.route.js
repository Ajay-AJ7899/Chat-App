import express from 'express';
const router = express.Router();

router.get('/signup', (req, res) => { //prefix will be /api/auth/singup
    res.send('Hello World');
});
router.get('/signin', (req, res) => {
    res.send('Hello World');
});
router.get('/logout', (req, res) => {
    res.send('Hello World');
});



export default router;