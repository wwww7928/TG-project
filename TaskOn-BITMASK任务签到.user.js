// ==UserScript==
// @name        TaskOn-BITMASK任务签到
// @namespace   Violentmonkey Scripts
// @match       https://taskon.xyz/RGBCYBERVERSE*
// @grant       none
// @version     1.0
// @author      -
// @description 2024/11/19 22:12:53
// ==/UserScript==
var 计时器1 = setInterval(function() {
    try {
        // 查找并点击元素
        var element = document.querySelector("body > div.auto-dialog > div > div.auto-dialog__card__container > div.task-dialog > div.g-fix-outline.g-pointer.action-button.large.task-dialog__action")
        if (element) {
            element.click();
            console.log('成功签到');
            clearInterval(计时器1); // 成功点击后结束定时器
        } else {
            console.log("计时器1未找到，继续搜索...");
        }
    } catch (error) {
        console.error("执行过程中发生错误:", error);
        // clearInterval(计时器1); // 如果出现错误，也可以选择停止
    }
}, 2500);
var 计时器2 = setInterval(function() {
    try {
        // 查找并点击元素
        var element = document.querySelector("body > div.ReactModalPortal > div > div > div > div > button.spin-btn");
        if (element) {
            element.click();
            console.log('成功签到');
            clearInterval(计时器1); // 成功点击后结束定时器
        } else {
            console.log("计时器1未找到，继续搜索...");
        }
    } catch (error) {
        console.error("执行过程中发生错误:", error);
        // clearInterval(计时器1); // 如果出现错误，也可以选择停止
    }
}, 2500);


