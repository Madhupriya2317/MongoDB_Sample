const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.json());

const authRoute = require('./routes/auth');

app.use('/api/user',authRoute);


app.listen(3005,()=> console.log("Server Running"))

