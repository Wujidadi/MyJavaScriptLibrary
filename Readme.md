# My JavaScript Library

自己寫的 JavaScript Library。


## MyJavaScriptLibrary.js

* **padding**(*str*, *char*, *num*, *direction = 'left'*)<br>
  依據指定的字元、數量及方向，在輸入字串的前或後填補字元。<br>
  *str*：輸入字串<br>
  *char*：要填補的字元<br>
  *num*：要填補的字元數目<br>
  *direction*：填補方向，預設為 left（左邊），可用的值有 left、front、before（以上均填補在左邊）及 right、after、back（以上均填補在右邊）。

* **countDateCalendarManner**(*d*)<br>
  依據公曆各月日數，將輸入的日數轉為 y 年 m 月 d 日的形式，如 32 天 = 2 月 1 日（意為 1 個月又 1 天，第 1 個月比照公曆 1 月為 31 天，以此類推），366 天 = 1 年 1 月 1 日（意為 1 年又 1 天，每年第 1 天視同公曆的 1 月 1 日）。<br>
  簡單來說，就是依據年、月、日的格式來計算日數，但月、日的部分使用一般曆法風格。<br>
  考慮了 4 年 1 閏及 400 年 97 閏的置閏週期。<br>
  *d*：輸入日數（從 1 開始）。