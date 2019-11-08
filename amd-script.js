/* 宣告全域變數及常數 */
let myLib;

/* 設定 RequireJS */
require.config({
    paths: {
        "mylib": "MyJavaScriptLibrary.amd"
    }
});

/* RequireJS */
require(["mylib"], function(MyLib) {
    myLib = MyLib;
});
