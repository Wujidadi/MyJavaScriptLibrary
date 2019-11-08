/**
 * 清空所有子元素（在 `Element.prototype` 中添加的方法）
 */
Element.prototype.removeAllChildren = function() {
    while (this.firstChild) {
        this.removeChild(this.firstChild);
    }
};

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
    enumerable : false
});
