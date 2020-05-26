//输入框发送消息
function sendSMS (){
  const val = stin.value;
  if( val ){
    client.send(val);
    stin.value='';//发送完立即清空

  }else{
    alert('请输入内容')
  }
}
export default sendSMS