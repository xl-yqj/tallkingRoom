//展示界面的服务器
const express = require('express');
const app = express();
const path = require('path');
const PORT = 5050;
const HOST_NAME = '10.31.160.41';
app.use(express.static(path.join(__dirname,'./client')));
app.listen(PORT,HOST_NAME,()=>{
  console.log(`网页展示url是:http://${HOST_NAME}:${PORT}`)
})