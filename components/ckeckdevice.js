
function checkdevice(){
let ismobile =""
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    ismobile = true;
  }
  else{
    ismobile = false;
  }
  return ismobile;
}


export default checkdevice;