//获取服务端信息 展示到界面上
import filterDate from './filterDate';
function showMessage (msg){
  console.log(msg);

  const ul = document.querySelector('ul');
  const li = document.createElement('LI');
  const p = document.createElement('P');
  P.innerHTML = window.username + ' - ' + filterDate(Date.now());
  li.innerHTML = msg.data;
  li.appendChild(p);
  ul.appendChild(li);
}

export default showMessage