console.clear();
require('dotenv').config();
Express = require('express');

const serverExpress = Express();

serverExpress.use(Express.static('../public'))

serverExpress.listen(process.env.PORT,()=>{
console.log(`server runing in the port ${process.env.PORT}`)
});