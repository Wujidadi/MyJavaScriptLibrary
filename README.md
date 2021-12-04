# Cck.js (My JavaScript Library)

自己寫的 JavaScript Library。


## MyJavaScriptLibrary.js 函數說明（依字母順序排列）

* **base10to62**(*number*)  
  將 10 進位數字轉換為 62 進制（0 ~ 9，A ~ Z，a ~ z）。  
  *number*：待轉換為 62 進制的 10 進位數字。

* **base62to10**(*number*)  
  將 62 進位數字轉換為 10 進制（0 ~ 9，A ~ Z，a ~ z）。  
  *number*：待轉換為 62 進制的 10 進位數字。

* **compressHTML**(*element*)  
  依 `document.querySelector` 可用的選擇器語法指定元素，壓縮內部 HTML 碼。  
  *element*：待壓縮的 HTML 元素。

* **countDateCalendarManner**(*d*)  
  依據公曆各月日數，將輸入的日數轉為 y 年 m 月 d 日的形式，如 32 天 = 2 月 1 日（意為 1 個月又 1 天，第 1 個月比照公曆 1 月為 31 天，以此類推），366 天 = 1 年 1 月 1 日（意為 1 年又 1 天，每年第 1 天視同公曆的 1 月 1 日）。  
  簡單來說，就是依據年、月、日的格式來計算日數，但月、日的部分使用一般曆法風格。  
  考慮了 4 年 1 閏及 400 年 97 閏的置閏週期。  
  *d*：輸入日數（從 1 開始）。

* **dateFormat**(*time = new Date()*, *ms = false*)  
  將以 13 位數（含毫秒）輸入的時間戳轉換為 `Y-m-d H:i:s`（ms = `false`）或 `Y-m-d H:i:s.u`（ms = `true`）格式，月、日、時、分、秒不足 2 位數、毫秒不足 3 位數時補零。  
  *time*：時間戳。  
  *ms*：是否輸出毫秒（預設值 = `false`）。

* **dateStamp**(*date = dateFormat()*)  
  將 `Y-m-d H:i:s`（ms = `false`）或 `Y-m-d H:i:s.u`（ms = `true`）格式的時間轉換為 13 位數（含毫秒）的時間戳。  
  *date*：時間字串，預設值為呼叫 `dateFormat()` 函數產生的當前時間字串。

* **degFull**(*degree*, *minute*, *second*)  
  轉換度分秒格式的度數為小數點格式。  
  *degree*：度分秒中的「度數」部分。  
  *minute*：度分秒中的「分」部分；值小於 0 或大於等於 60 時拋出錯誤。  
  *second*：度分秒中的「秒」部分；值小於 0 或大於等於 60 時拋出錯誤。

* **degMinSec**(*degree*)  
  轉換小數點格式的度數為度分秒格式。  
  *degree*：小數點格式的度數。

* **formDateFormat**(*date*, *s = 0*, *ms = 0*, *milli = false*)  
  將表單 datetime 項的值轉成 `Y-m-d H:i:s` (milli = `false`) 或 `Y-m-d H:i:s.u` (milli = `true`) 格式。  
  *date*：表單輸入的日期時間值。  
  *s*：指定秒數。  
  *ms*：指定毫秒數。  
  *milli*：是否輸出毫秒。

* **getParameter**(*param*)  
  取得 URL 中的 GET 參數。

* **microTimestamp**(*micro = false*)  
  取得亞毫秒時間。  
  *micro*：`true` 返回整數微秒時間戳；`false` 返回毫秒帶小數時間戳。

* **microtime**  
  取得帶微秒值的時間字串（`Y-m-d H:i:s.u` 格式）。

* **msPart**(*ms*, *level = null*)  
  解析輸入的毫秒值，依轉換等級拆解為週、日、時、分、秒等單位，並返回為物件。  
  *ms*：毫秒值。  
  *level*：轉換等級，分為週、日、時、分、秒及毫秒；預設值為 `null`，即自動代入最高等級（週）。

* **packParameter**(*paramObj*)  
  給定一維的 GET 參數物件，轉為 URL GET 參數字串。  
  *paramObj*：GET 參數物件。

* **padding**(*str*, *char*, *num*, *direction = 'left'*)  
  依據指定的字元、數量及方向，在輸入字串的前或後填補字元（不支援 `both` 雙向）。  
  *str*：輸入字串。  
  *char*：要填補的字元。  
  *num*：要填補的字元數目。  
  *direction*：填補方向，預設為 `left`（左邊），可用的值有 `left`、`front`、`before`（以上均填補在左邊）及 `right`、`after`、`back`（以上均填補在右邊）。

* **parseDate**(*dateString*)  
  輸入 `Y-m-d` 或 `Y-m-d H:i:s` 格式的日期時間字串，將其轉為 Date 物件（可接受西元前日期）。  
  *dateString*：符合 `Y-m-d` 或 `Y-m-d H:i:s` 格式的日期時間字串。

* **randNum**(*floor = 0*, *ceil = 1*)  
  產生指定區間的亂數。  
  *floor*：區間下限，預設為 0。  
  *ceil*：區間上限，預設為 0。  
  不指定區間上下限時，自動依預設值分別代入 0 和 1，效果與 `Math.random()` 相同。

* **randStr**(*radix*, *len*, *caps = false*)  
  產生由數字或數字 + 英文字母組成的隨機字串，`caps` 為 `true` 時等於偽 62 進位隨機亂數。  
  *radix*：採用的進位制基數，若要產生純數字，則設為 10（10 進位）；若要產生所有數字 + 字母組成的字串，則設為 36（36 進位）。  
  *len*：要產生的字串長度。  
  *caps*：是否大小寫混合，預設為 false 即全部小寫。

* **replaceParameter**(*pairs*)  
  取代或增添 URL 中的 GET 參數。  
  *pairs*：GET 參數物件。

* **reverseTimedBase62**(*base62*)  
  將帶時間戳的 62 進位字串（TGUID，最左 10 位數視為時間戳）轉為 `Y-m-d H:i:s.u` 格式的時間字串。  
  *base62*：待轉換的 62 進位字串。

* **timedBase62**(*len*, *time = null*)  
  產生帶時間戳的 62 進位字串（時間戳向左補滿 10 位數）。  
  *len*：轉出字串的長度。  
  *time*：16 位微秒級時間戳，預設為 `null`，即自動取得當前時間。


## route.js (for Laravel)

> 2020 年 10 月 29 日，於台全電機冰櫃監控專案（Taigene-Freezer-Web）中，為顧及不支援 ES6 語法的瀏覽器，加上了對 ES5 以前舊語法的支援。
