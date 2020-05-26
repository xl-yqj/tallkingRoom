//
function filterDate(val){
  const date = new Date(val)
  return date.getFullYear()+'年'+(date.getMonth()+1)+'月'+date.getDate();

}
export default filterDate