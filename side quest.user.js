// ==UserScript==
// @name        side quest
// @namespace   Violentmonkey Scripts
// @match       https://sidequest.rcade.game/quests*
// @grant       none
// @version     1.0
// @author      -
// @description 2024/11/14 18:11:33
// ==/UserScript==
var 计时器1 = setInterval(function() {
    try {
        // 查找并点击元素
        var element = document.querySelector("#root > div > div > div.main > div.content.undefined > div > div.spin-container > div > button");
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
var 计时器3 = setInterval(function() {
    try {
        // 查找并点击元素
        var element = document.querySelector("body > div.ReactModalPortal > div > div > div > div > button");
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
var 计时器4 = setInterval(function() {
    try {
        // 查找并点击元素
        var element = document.querySelector("#root > div > div > div.main > div.content.undefined > div > div.mission-list > div:nth-child(2) > div.right-section > button");
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
var 计时器5 = setInterval(function() {
    try {
        // 查找并点击元素
        var element = document.querySelector("body > div:nth-child(9) > div > div > div > div > div:nth-child(3) > div > div > div.btn-container > button");
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
