console.log('hi!')

let shops = [
    {name:"강남방탈출", latitude:37.50201131555239, longitude:127.02536556486315},
    {name:"신촌방탈출", latitude:37.5720302842096, longitude:126.94168614116083},
    {name:"부천방탈출", latitude:37.487075729793915, longitude:126.78200703369356},
    {name:"대학로방탈출", latitude:37.59319726685757, longitude:127.00208348755136}
  ]
  
  //거리계산함수
  function getDistance(lat1, lon1, lat2, lon2, unit) {
      if ((lat1 == lat2) && (lon1 == lon2)) {
          return 0;
      }
      else {
          var radlat1 = Math.PI * lat1/180;
          var radlat2 = Math.PI * lat2/180;
          var theta = lon1-lon2;
          var radtheta = Math.PI * theta/180;
          var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
          if (dist > 1) {
              dist = 1;
          }
          dist = Math.acos(dist);
          dist = dist * 180/Math.PI;
          dist = dist * 60 * 1.1515;
          if (unit=="K") { dist = dist * 1.609344 } //킬로미터 계산
          if (unit=="N") { dist = dist * 0.8684 }
          return dist;
      }
  }
  
  //현위치 불러와서 거리비교 하는 함수 (html5 Geolocation API 사용)
  navigator.geolocation.getCurrentPosition((position) => {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    
    console.log(latitude, longitude);
    //내 현 위치를 console로 확인할 수 있다.
  
    for(let i=0; i<shops.length; i++) {
      let distance = getDistance(latitude, longitude, shops[i].latitude, shops[i].longitude, "K")
      shops[i].distance = distance;
    }
  //더미 데이터의 길이만큼 거리계산을 반복하는데, K가 인자로 들어가 킬로미터 단위로 계산한다
  //더미 데이터가 든 사전에는 distance라는 키와 값이 추가가 된다.
  
    let calShop = shops.sort(function (a, b){
      if (a.distance > b.distance){
        return 1;
      }
      if (a.distance < b.distance){
        return -1;
      }
      return 0
    }); //거리순에 따라 오름차순 순으로 정렬해준다.
    console.log(calShop) //오름차순 정렬된 자료를 console에서 확인할 수 있다.
  }, (err) => {
  
  });


function read_with_ajax(url,fun,holder){//url,function,just a placeholder
    holder=new XMLHttpRequest;
    holder.open('GET',url);
    holder.onload=fun;
    holder.send()
    }

    function alertTxt(){
        //alert(this.response)
        data = $.csv.toArrays(this.response) //global value : data
        //console.log(data)
        alert(data)
    }

    window.onload=function(){
        read_with_ajax('restaurant_list.csv',alertTxt)
    }

$.ajax({
    url: 'restaurant_list.csv',
    dataType: 'text',
  }).done(successFunction);

read_with_ajax

// 목록을 뽑아내는 함수, 반복문을 이용해서 리스트 정렬
function read_list(json_file) {
    for (let i = 0; i < response_json.images.length; i++) {
        i
    }
}

// 거리순
// 리뷰 많은 순
// 평점 순

function option_select() {

}