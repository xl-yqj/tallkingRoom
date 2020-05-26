//创建服务器
const ws = require ('ws');
const port = 8000;
const host = '10.31.160.41';
const server= new ws.Server({
  host,
  port
});

let count = 10000;
const clients = [];
//编号 存储 广播数据
server.on('connection',client=>{
  client.name = ++count;
  clients[client.name] = client;
  //获取数据
  client.on('message',msg=>{
    msg.name = client.name;
    console.log(msg.toString())//把二进制转成字符串
    //执行广播方法
    broadcast(client,msg)
  });
});
//广播数据方法
function  broadcast(client,msg){
  for(let key in clients){
    clients[key].send(msg.toString())
  }
}


server.on('listening',()=>{
  console.log(`the server is running at:ws://${host}:${port}`)
});