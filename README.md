# Hex-Travel 六角高雄旅遊網

六角學院 JavaScript 學徒的試煉 課程最終作業 (一)。

* 網頁：https://kencc.github.io/hextravel/
* 原始碼：https://github.com/kencc/hextravel/
* 設計稿：https://hexschool.github.io/JavaScript_HomeWork/

# 內容
* JavaScript 沒有編譯，請使用目錄下的 all.js
* 高雄旅遊資訊 JSON 資料檔案 data.js
* Webpack 僅編譯 SCSS 檔案與導入 Bootstrap 來處理 CSS 樣式

# 專案配置

使用 npm 方式建置專案與 Webpack 編譯產出最終 CSS

# 編譯方式
1. npm install
2. npx webpack --mode development (未壓縮版本的 CSS)
3. npx webpack (壓縮版本的 CSS)

# 練習過程中遇到的問題

## 使用 a 標籤做按鈕，沒有 value 的值

showCards()是透過取得 e.target.value 的值來判定被點擊到的元素是哪一個按鈕，但是一開始 HTML 上面的按鈕是使用 a 標籤設計的，而 a 標籤並沒有 value 的屬性。因此將 a 標籤改用 button 來製作。

# 學習到的新技巧

## 使用 indexof() 從陣列中撈出不重複的值

新增一個空陣列 section ， 然後透過 indexof 的方式比對 section 與 data 這兩個陣列，如果該筆資料 section  沒有，就把該筆資料新增到 section 陣列中，藉此產生一個沒有重複資料的新陣列。

```
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
```

參考資料：
https://blog.hanlee.co/%e3%80%90javascript%e3%80%91javascript-%e5%85%a5%e9%96%80%e7%af%87-%e5%ad%b8%e5%be%92%e7%9a%84%e8%a9%a6%e7%85%89-%e6%9c%80%e7%b5%82%e4%bd%9c%e6%a5%ad/

https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf