/**
 * 清空所有子元素（在 `Element.prototype` 中添加的方法）
 */
Element.prototype.removeAllChildren = function() {
    while (this.firstChild) {
        this.removeChild(this.firstChild);
    }
};

/**
 * 清空物件（在 `Object.prototype` 中添加的方法）
 */
Object.prototype.clear = function() {
    let obj = this;
    for (let key in obj) {
        delete obj[key];
    }
};
