// 將高雄旅遊資訊的 JSON 資料放到 data 陣列裡面
var data = rawdata['result']['records'];
var filter = document.querySelector('.filter')
var btn = document.querySelectorAll('.btn');

// 從 data 中撈出行政區資料，填入選單中
function addData2Filter(){
  str = '<option value='+ '"default"'+'>--請選擇行政區--</option>';
  var section = [];
  for(var i=0;i<data.length;i++){
    if (section.indexOf(data[i].Zone) == -1){
      section.push(data[i].Zone);
      str += '<option value='+ data[i].Zone +'>'+ data[i].Zone +'</option>';
    }
  }
  filter.innerHTML = str;
}

addData2Filter();

// 對選單增加 change 的事件監聽
filter.addEventListener('change',showCards,false);

// 對四個按鈕加上 click 的事件監聽
for(var i=0;i<4;i++){
  btn[i].addEventListener('click',showCards,false);
}

// 從 data 陣列中撈出對應的資料，然後顯示到 UI 上
function showCards(e){
  var myZone = e.target.value;
  var myName = '';
  var myAdd = '';
  var myOpentime = '';
  var myTel = '';
  var myTicketinfo = '';
  var myPic = '';
  var cardTemplate = '';
  console.log(myZone);
  document.querySelector('.show-tittle').textContent = myZone;
  for(var i=0;i<data.length;i++){
    if (data[i].Zone == myZone){
      myName = data[i].Name;
      console.log(myName);
      myAdd = data[i].Add;
      console.log(myAdd);
      myOpentime = data[i].Opentime;
      console.log(myOpentime);
      myTel = data[i].Tel;
      console.log(myTel);
      myTicketinfo = data[i].Ticketinfo;
      console.log(myTicketinfo);
      myPic = data[i].Picture1;
      console.log(myPic);

      cardTemplate +=`
      <div class="col-md-6 mb-4">
      <div class="card">
        <div class="card-header bg-cover d-flex justify-content-between align-items-end text-white" style="background-image: url(`+ myPic +`);height: 155px;">
          <h3>`+ myName +`</h3>
          <span>`+ myZone +`</span>
        </div>
        <div class="card-body d-flex justify-content-between align-items-end">
          <ul class="list-unstyled">
            <li><img src="./images/icons_clock.png" style="height: 18px; margin: 0 5px;" alt="">`+ myOpentime +`</li>
            <li><img src="./images/icons_pin.png" style="height: 18px; margin: 0 7px;" alt="">`+ myAdd +`</li>
            <li><img src="./images/icons_phone.png" style="height: 18px; margin: 0 9px;" alt="">`+ myTel +`</li>
          </ul>
          <span><img src="./images/icons_tag.png" style="height: 18px; margin: 0 5px;" alt="">`+ myTicketinfo +`</span>
        </div>
      </div>
    </div>
      `
      console.log(cardTemplate);
    }
  }
  document.querySelector('.show-info').innerHTML = cardTemplate;
}