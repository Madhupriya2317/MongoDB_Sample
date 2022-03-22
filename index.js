const express = require('express');
const bodyParser = require('body-parser');
const app = express();
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json());
// app.use(express.urlencoded({extended:true}))

const authRoute = require('./routes/auth');

app.use('/api/user',authRoute);


app.listen(3005,()=> console.log("Server Running"))

