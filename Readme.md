# My JavaScript Library

自己寫的 JavaScript Library。


## MyJavaScriptLibrary.js

* **countDateCalendarManner**(*d*)<br>
  依據公曆各月日數，將輸入的日數轉為 y 年 m 月 d 日的形式，如 32 天 = 2 月 1 日（意為 1 個月又 1 天，第 1 個月比照公曆 1 月為 31 天，以此類推），366 天 = 1 年 1 月 1 日（意為 1 年又 1 天，每年第 1 天視同公曆的 1 月 1 日）。<br>
  簡單來說，就是依據年、月、日的格式來計算日數，但月、日的部分使用一般曆法風格。<br>
  考慮了 4 年 1 閏及 400 年 97 閏的置閏週期。<br>
  *d*：輸入日數（從 1 開始）。

* **dateFormat**(*time*, *ms = false*)<br>
  將以 13 位數（含毫秒）輸入的時間戳轉換為 `Y-m-d H:i:s`（`ms = false`）或 `Y-m-d H:i:s.u`（`ms = true`）格式，月、日、時、分、秒不足 2 位數、毫秒不足 3 位數時補零。

* **dateStamp**(*date*)<br>
  將 `Y-m-d H:i:s`（`ms = false`）或 `Y-m-d H:i:s.u`（`ms = true`）格式的時間轉換為 13 位數（含毫秒）的時間戳。

* **getParameter**(*param*)<br>
  取得 URL 中的 GET 參數。

* **padding**(*str*, *char*, *num*, *direction = 'left'*)<br>
  依據指定的字元、數量及方向，在輸入字串的前或後填補字元。<br>
  *str*：輸入字串<br>
  *char*：要填補的字元<br>
  *num*：要填補的字元數目<br>
  *direction*：填補方向，預設為 left（左邊），可用的值有 left、front、before（以上均填補在左邊）及 right、after、back（以上均填補在右邊）。

* **randStr**(*radix*, *len*, *caps = false*)<br>
  產生由數字或數字 + 英文字母組成的隨機字串。<br>
  *radix*：採用的進位制基數，若要產生純數字，則設為 10（10 進位）；若要產生所有數字 + 字母組成的字串，則設為 36（36 進位）。<br>
  *len*：要產生的字串長度。<br>
  *caps*：是否大小寫混合，預設為 false 即全部小寫。