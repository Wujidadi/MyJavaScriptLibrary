/*
 *==============================
 * 字串相關方法
 *==============================
 */

/**
 * 將已轉成字串的秒數轉換為 HH:MM:SS 格式
 * @returns {string} HH:MM:SS 格式的秒數
 */
String.prototype.toHHMMSS = function() {
    let ProtoSecond = parseInt(this, 10),
        Hour = Math.floor(ProtoSecond / 3600),
        Minute = Math.floor((ProtoSecond - (Hour * 3600)) / 60),
        Second = ProtoSecond - (Hour * 3600) - (Minute * 60);

    if (Hour < 10) {
        Hour = '0' + Hour;
    }
    if (Minute < 10) {
        Minute = '0' + Minute;
    }
    if (Second < 10) {
        Second = '0' + Second;
    }

    return Hour + ':' + Minute + ':' + Second;
};


/*
 *==============================
 * 物件相關方法
 *==============================
 */

/**
 * 取得物件屬性數量
 * 透過 `Object.defineProperty` 在 `Object.prototype` 中添加的方法，ES5 以後適用
 */
Object.defineProperty(Object.prototype, 'length', {
    get: function() {
        let obj = this,
            len = 0;
        for (let key in obj) {
            len++;
        }
        return len;
    },
    enumerable: false
});

/**
 * 清空物件（透過 `Object.defineProperty` 在 `Object.prototype` 中添加的方法，ES5 以後適用）
 */
Object.defineProperty(Object.prototype, 'removeAllProperties', {
    value: function() {
        let obj = this;
        for (let key in obj) {
            delete obj[key];
        }
    },
    enumerable: false
});


/*
 *==============================
 * 元素相關方法
 *==============================
 */

/**
 * 清空所有子元素（在 `Element.prototype` 中添加的方法）
 */
Element.prototype.removeAllChildren = function() {
    while (this.firstChild) {
        this.removeChild(this.firstChild);
    }
};