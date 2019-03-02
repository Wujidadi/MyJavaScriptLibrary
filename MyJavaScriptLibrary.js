function padding(str, char, num, direction = 'left') {
    let dir = direction.toLowerCase();
    let i = 0;
    let dif = 0;
    let tar = '';
    let len = str.toString().length;
    if (len < num) {
        dif = num - len;
        for (i = 0; i < dif; i++) {
            tar += char;
        }
        switch (dir) {
            default:
            case 'left':
            case 'front':
            case 'before':
            case 'default':
                tar += str.toString();
                break;

            case 'right':
            case 'after':
            case 'back':
                tar = str.toString() + tar;
                break;
        }
        return tar;
    }
    return str;
}


function countDateCalendarManner(d)
{
    /* 強制轉換輸入日數為整數，並令日期從 0 開始計數，以利後續換算 */
    let day = parseInt(d - 1);

    /* 日數為負時返回空值 */
    if (day < 0)
    {
        return null;
    }

    /* 宣告大、中、小 3 種週期的日數 */
    let DayInGrandCycle = day % 146097;                 // 大週期：400 年 97 閏，以 146,097 日為一循環
    let DayInMiddleCycle;
    let DayInNormalCycle;

    /* 中週期日數規則 */
    // 前 99 年正常 4 年 1 閏
    if (DayInGrandCycle < 36525)
    {
        DayInMiddleCycle = DayInGrandCycle % 1461;      // 中週期：4 年 1 閏，以 1,461 日為一循環
    }
    // 第 100 年不閏，故從第 101 年起計算中週期日數時，令大週期日數前推 1 天
    else if (DayInGrandCycle < 73049)
    {
        DayInMiddleCycle = (DayInGrandCycle + 1) % 1461;
    }
    // 第 200 年不閏，故從第 201 年起計算中週期日數時，令大週期日數再往前推 1 天（累計 2 天）
    else if (DayInGrandCycle < 109573)
    {
        DayInMiddleCycle = (DayInGrandCycle + 2) % 1461;
    }
    // 第 300 年不閏，故從第 301 年起計算中週期日數時，令大週期日數再往前推 1 天（累計 3 天）
    else
    {
        DayInMiddleCycle = (DayInGrandCycle + 3) % 1461;
    }

    /* 小週期日數規則 */
    // 中週期日數 = 1460，即 4 年週期的最後一天
    if (DayInMiddleCycle == 1460)
    {
        // 大週期日數等於第 101、201、301 年的第一天時，令小週期日數歸零（跳到一年的第一天）
        if (DayInGrandCycle == 36524 || DayInGrandCycle == 73048 || DayInGrandCycle == 109572)
        {
            DayInNormalCycle = 0;
        }
        // 否則將小週期日數特別標定為 365（從 0 開始的第 366 天），代表其為閏年的最後一天
        else
        {
            DayInNormalCycle = 365;
        }
    }
    // 中週期日數不等於 1460 時，小週期日數等於中週期日數對 365 取模
    else
    {
        DayInNormalCycle = DayInMiddleCycle % 365;
    }

    /* 簡化小週期變數名稱 */
    let Day = DayInNormalCycle;

    /* 宣告大、中、小 3 種週期的年數 */
    let YearByGrandCycle = Math.floor(day / 146097) * 400;      // 大週期年數 = 日數 ÷ 大週期日數 × 400 年
    let YearByMiddleCycle;
    let YearByNormalCycle;

    /* 中週期年數規則 */
    // 中週期日數 = 1460 且小週期日數 = 0，表示為第 101、201、301 年的第 1 天，
    // 此時令中週期年數 = 大週期日數除以 1461 取整乘以 4 後再加 1
    if (DayInMiddleCycle == 1460 && DayInNormalCycle == 0)
    {
        YearByMiddleCycle = Math.floor(DayInGrandCycle / 1461) * 4 + 1;
    }
    // 中、小週期日數均為 0，且位於大週期的後 300 年，表示為每 4 年中週期的第 1 天，
    // 此時令中週期年數 = 大週期日數除以 1461 取整加 1 後再乘以 4
    // （前 100 年沒有「世紀年不能被 400 整除則不閏」的狀況，故每 4 年第 1 天不須如此處理）
    else if (DayInMiddleCycle == 0 && DayInNormalCycle == 0 && DayInGrandCycle >= 36525)
    {
        YearByMiddleCycle = (Math.floor(DayInGrandCycle / 1461) + 1) * 4;
    }
    // 其他狀況下，令中週期年數 = 大週期日數除以 1461 取整再乘以 4
    else
    {
        YearByMiddleCycle = Math.floor(DayInGrandCycle / 1461) * 4;
    }

    /* 小週期年數：若中週期日數 = 1460，代表為 4 年 1 閏週期的最後一天，為避免對 1460 取模後年數被加 1，強制令小週期年數 = 3 */
    YearByNormalCycle = (DayInMiddleCycle == 1460) ? 3 : Math.floor(DayInMiddleCycle / 365);

    /* 大、中、小週期年數相加後存為 Year 變數 */
    let Year = YearByGrandCycle + YearByMiddleCycle + YearByNormalCycle;

    /* 日數 log */
    // console.log('Day in grand cycle (400 years) = ' + DayInGrandCycle);
    // console.log('Day in middle cycle (4 years) = ' + DayInMiddleCycle);
    // console.log('Day in normal cycle (1 year) = ' + DayInNormalCycle);
    // console.log('Day = ' + Day);

    /* 年數 log */
    // console.log('Year by grand cycle = ' + YearByGrandCycle);
    // console.log('Year by middle cycle = ' + YearByMiddleCycle);
    // console.log('Year by normal cycle = ' + YearByNormalCycle);
    // console.log('Year = ' + Year);

    /* 宣告年數字串及閏年旗標 */
    let YearStr = '';
    let LeapYear = 0;

    /* 日數超過 365 時賦值給年數字串 */
    if (day >= 365) {
        YearStr = Year + ' 年 ';
    }

    /* 符合 400 年 97 閏規則時，令閏年旗標 = 1 */
    if (Year % 4 == 3 && Year % 400 != 99 && Year % 400 != 199 && Year % 400 != 299) {
        LeapYear = 1;
    }

    /* 律定平年及閏年的各月日數陣列 */
    let DaysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (LeapYear == 1) {
        DaysInMonth[1] = 29;        // 閏年單獨將 2 月的天數改為 29
    }
    /* 將全年各月累計日數儲存為陣列 */
    let AddUpDays = [0];            // 全年各月累計日數陣列，先律定第 0 項 = 0
    let addUp = 0;                  // 各月日數累加變數
    for (let i = 0; i < DaysInMonth.length; i++) {
        addUp += DaysInMonth[i];
        AddUpDays[i + 1] = addUp;
    }
    /* 各月日數及累計日數陣列印出 log */
    // console.log('DaysInMonth = [' + DaysInMonth + ']');
    // console.log('AddUpDays = [' + AddUpDays + ']');

    /* 應用 switch case 的範圍判斷語法，輸出日數相對應的年月日計數 */
    switch (true) {
        case Day < AddUpDays[0]:
        default:
            break;

        case Day < AddUpDays[1]:
            return YearStr + '1 月 ' + (Day + 1) + ' 日';
            break;

        case Day < AddUpDays[2]:
            return YearStr + '2 月 ' + (Day - AddUpDays[1] + 1) + ' 日';
            break;

        case Day < AddUpDays[3]:
            return YearStr + '3 月 ' + (Day - AddUpDays[2] + 1) + ' 日';
            break;

        case Day < AddUpDays[4]:
            return YearStr + '4 月 ' + (Day - AddUpDays[3] + 1) + ' 日';
            break;

        case Day < AddUpDays[5]:
            return YearStr + '5 月 ' + (Day - AddUpDays[4] + 1) + ' 日';
            break;

        case Day < AddUpDays[6]:
            return YearStr + '6 月 ' + (Day - AddUpDays[5] + 1) + ' 日';
            break;

        case Day < AddUpDays[7]:
            return YearStr + '7 月 ' + (Day - AddUpDays[6] + 1) + ' 日';
            break;

        case Day < AddUpDays[8]:
            return YearStr + '8 月 ' + (Day - AddUpDays[7] + 1) + ' 日';
            break;

        case Day < AddUpDays[9]:
            return YearStr + '9 月 ' + (Day - AddUpDays[8] + 1) + ' 日';
            break;

        case Day < AddUpDays[10]:
            return YearStr + '10 月 ' + (Day - AddUpDays[9] + 1) + ' 日';
            break;

        case Day < AddUpDays[11]:
            return YearStr + '11 月 ' + (Day - AddUpDays[10] + 1) + ' 日';
            break;

        case Day < AddUpDays[12]:
            return YearStr + '12 月 ' + (Day - AddUpDays[11] + 1) + ' 日';
            break;
    }
}

function dateFormat(time, ms = false) {
    let date = new Date(time);
    let y = date.getFullYear();
    let m = padding(date.getMonth() + 1, '0', 2);
    let d = padding(date.getDate(), '0', 2);
    let h = padding(date.getHours(), '0', 2);
    let i = padding(date.getMinutes(), '0', 2);
    let s = padding(date.getSeconds(), '0', 2);
    if (!ms) {
        return y + '-' + m + '-' + d + ' ' + h + ':' + i + ':' + s;
    } else {
        let u = padding(date.getMilliseconds(), '0', 3);
        return y + '-' + m + '-' + d + ' ' + h + ':' + i + ':' + s + '.' + u;
    }
}

function getParameter(param) {
    let url = location.href;
    let paraString = url.substring(url.indexOf('?') + 1, url.length).split('&');
    for (let i = 0; i < paraString.length; i++) {
        let paraParse = paraString[i].split('=');
        let key = paraParse[0];
        let val = paraParse[1];
        if (key == param) {
            return val
        }
    }
}