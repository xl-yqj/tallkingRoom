//引入模块
import sendSMS from './sendSMS';
import showMessage from './showMessage';
import filterDate from './filterDate';
//获取元素
const container = document.querySelector('.container')
const btn = document.querySelector('button');
const stin = document.querySelector('input');
const h = document.documentElement.clientHeight;
container.style.height = h - 100 + 'px';

//获取名字弹框
const nameBox = document.querySelector('.name-box');
const cancel = document.querySelector('#cancel');
const confirm = document.querySelector('#confirm');
const user = document.querySelector('#username');
//关掉弹框
function closeNameBox (){
  nameBox.style.display = 'none';
}
cancel.onclick = closeNameBox;
confirm.onclick = function (){
  window.username = user.nodeValue;
  //第一次连接好服务器之后到发送
  client.onopen = function (){
    client.send(`${window.username}进来直播间`)
  }
}
//连接服务器
const port = 8000;
const host = '10.31.160.41';
const serverURL = `ws://${host}:${port}`;
const client = new WebSocket(serverURL);

//获取服务端信息 展示到界面上
client.onmessage = showMessage;

//点击发送内容
btn.onclick = sendSMS;
//回车发送内容
document.onkeydown = function (e){
  if(e.keyCode == 13){
    sendSMS();
  }
}


