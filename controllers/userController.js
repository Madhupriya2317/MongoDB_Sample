const user = require('../model/users');

const getUsers = (req,res) => {
    res.send({message : 'get all users'});
}

const setUsers = async(req,res) => {
    const { email, password } = req.body;
   
   user.create({
        email,
        password
    }).then(result=>{
        res.send({statusCode : 200, message : "Registered Successfully"});
        res.end();
    }).catch(err=>{
        res.send({statusCode : 400, message : "Failed"});
        res.end();
    })
}


module.exports = {
    getUsers,
    setUsers,
}