function change(){//change() 함수는 select 테그 onchange시 동작하는 함수로 change될 떄 마다 도시의 코드를 읽어와서 도시 코드애 따른 날씨 정보를 출력하게끔 해준다. 동적기능1
    var lselect = document.getElementById("city");
    var cityname= lselect.options[lselect.selectedIndex].value; //선택한 도시의 value를 읽어옴.

   $.getJSON("http://api.openweathermap.org/data/2.5/weather?id="+cityname+"&appid="+WEATHER_API+"&units=metric", function(data){
      var $minTemp=data.main.temp_min; // 최저 온도 변수
      var $maxTemp=data.main.temp_max; //최고 온도 변수
      var $cTemp=data.main.temp; //현재 온도 변수
      var $humi=data.main.humidity;// 현재 습도 변수
      var $now = new Date($.now()); //현재 시간 변수
      var $cDate=$now.getFullYear()+'년 ' + ($now.getMonth()+1 )+ '월 '+$now.getDate()+'일 '+ $now.getHours() + ':'+ $now.getMinutes();
      var $wIcon=data.weather[0].icon; //현재 날씨 아이콘 변수
      var $dis= data.weather[0].description; //현재 날씨에 대한 설명 변수

      document.getElementById("forecast").innerHTML = $cDate+" - 날씨예보"; //입력을 받아와서 이렇게 출력을 한다.
      document.getElementById("ctemp").innerHTML = "현재온도: "+$cTemp+" &#8451;";
      document.getElementById("clowtemp").innerHTML = "최저온도: "+$minTemp+" &#8451;";
      document.getElementById("chightemp").innerHTML = "최고온도: "+$maxTemp+" &#8451;";
      document.getElementById("chumidity").innerHTML = "습도: "+$humi+" %";
      document.getElementById("c").innerHTML = $dis;
      document.getElementById("cicon").innerHTML = '<img src="http://openweathermap.org/img/w/'+ $wIcon+ '.png" id="move">';

      //해당 날씨의 icon 번호에 따라 날씨 정보, 날씨에 따른 알림을 알려주는 2차원 list 변수 생성 
      list=[["01","낮에는 해가 쨍쨍하네요. ","날씨 좋은 날","선크림 바르고 나가세요~~"], 
      ["02","구름이 아주 약간 있네요.","구름 낀 날","그래도 자외선에 노출되니 선크림을 꼭 발라주세요~"], 
      ["03","구름이 흩어져 있네요. ","구름 낀 날","그래도 자외선에 노출되니 선크림을 꼭 발라주세요~"], 
      ["04","하늘에 구름이 많이 껴 있네요.","구름 많이 낀 날", "비가 올 수도 있으니 우산을 챙겨가주세요~"], 
      ["09","소나기가 내리네요.","비오는 날","비가 오니 우산을 꼭 챙겨나가주세요~"], 
      ["10","창밖으로 비가 내리네요.","비오는 날","비가 오니 우산을 꼭 챙겨나가주세요~"],
      ["11","우르르쾅쾅 천둥번개가 치네요.","천둥번개 치는 날","밖에 천둥이 치니 외출을 삼가하는 게 좋긴 하겠어요~"],
      ["13","하이얀 눈이 내려요.","눈 오는 날","미끄러지지 않도록 주의해주세요~"],
      ["50","안개가 흐리게 끼여있어요.","뿌연 날","차 운전 주의해주세요!!"]];

      var $string; //api로 부터 얻은 $wIcon 변수와 $humi 변수를 보고 판단하여 새로운 출력값 만듦 
      if ($humi>=70){
         document.getElementById("about").innerHTML = "오늘은 습도가 높네요"; // 동적기능2
      }
      else if ($humi<=30){
         document.getElementById("about").innerHTML ="오늘은 습도가 낮네요";

      }
      else{
         for (var j=0;j<=8;j++){
            if ($wIcon==(list[j][0]+"d")||$wIcon==(list[j][0]+"n")){
                document.getElementById("about").innerHTML ="오늘은 "+list[j][1]+"<br>"+list[j][2]+", "+list[j][3];

                break;
            }
         }
      }
   }); 
}