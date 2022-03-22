const express = require('express');
const app = express();
const router = express.Router();
// const { Register } = require('../model/users');
// const db = require('../config/db');
const { getUsers, setUsers } = require('../controllers/userController');
app.use(router);
router.use(express.json())

router.get('/register', getUsers);

router.post('/register', setUsers);
// router.post('/register',(req,res)=>{
    // const { email,password } = req.body;
    // console.log(req.body)

//   const data = new Register({
//       "email" : req.body.email,
//       "password" : req.body.password
//   })
// const result = Register.create({
//     "email" : email,
//     "password" : password
// })
// res.send(200).json({message : `Registered Successfully`})
// });


module.exports = router;