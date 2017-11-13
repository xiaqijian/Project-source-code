export {
	getShopDis
}


// 排序
function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp
  }
function improveBubble(arr, len){
    for(let i = len - 1; i >= 0; i--){
      let pos = 0;
      for(let j = 0; j < i; j++){
        if(arr[j].disdata > arr[j+1].disdata){
          swap(arr, j, j+1);
          pos = j + 1;
        }
      }
      len = pos + 1;
    }
    return arr;
}

// 

// 如何进行企业级应用，是一件很难的事情，
/*
目前利用这个数据结构是否可以将联盟商家进行重构，
表单提交，与服务器想连接
小程序登录

*/
// 计算距离，改变数据
// res===数据结果，curlat ===本地经纬度
function getShopDis(res,curlat,curlng){
     // res是api请求回来的结果

     for(var i=0;i<res.data.length;i++){
       var lng = res.data[i].lng;
       var lat=res.data[i].lat;
       
       var disData= getDistance(curlat,curlng, lat,lng)
       var num = disData/1000;
      
       res.data[i].disdata = parseFloat(num.toFixed(2));
     }
     
     var new_apidata = improveBubble(res.data,res.data.length);
     return new_apidata
     
}
function getDistance(lat1, lng1, lat2, lng2) {
     lat1 = lat1 || 0;
     lng1 = lng1 || 0;
     lat2 = lat2 || 0;
     lng2 = lng2 || 0;
     var rad1 = lat1 * Math.PI / 180.0;
     var rad2 = lat2 * Math.PI / 180.0;
     var a = rad1 - rad2;
     var b = lng1 * Math.PI / 180.0 - lng2 * Math.PI / 180.0;

     var r = 6378137;
     return r * 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(rad1) * Math.cos(rad2) * Math.pow(Math.sin(b / 2), 2)))
}



