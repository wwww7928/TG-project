// ==UserScript==
// @name        【TG】tabiZoo
// @namespace   Violentmonkey Scripts
// @match       https://front.tabibot.com/*
// @grant       none
// @version     1.0
// @author      -
// @description 2024/11/14 22:01:39
// ==/UserScript==


// 点击签到
var 计时器1 = setInterval(function() {

        // 查找并点击元素
        var element = document.querySelector("#root > div > div > div.w-screen.h-screen > div.w-full.h-full.fixed.flex.justify-center.items-center.left-0.top-0.bg-\\[url\\(\\\"\\@\\/assets\\/images\\/game\\/spin\\/bg\\.png\\\"\\)\\].bg-cover.bg-top.bg-no-repeat > div.relative.w-full.h-full.flex.flex-col.justify-center.items-center > div.w-full.flex.flex-col.justify-center.items-center.mb-\\[20vh\\] > div.relative.w-\\[302px\\].h-\\[72px\\].z-\\[4\\] > div > img");
      if (element) {
            element.click();
            console.log('spin');
            clearInterval(计时器1); // 成功点击后结束定时器
        } else {
            console.log("计时器1未找到，继续搜索...");
        }

}, 1500);

var 计时器1 = setInterval(function() {
    try {
        // 查找并点击元素
        var element = document.querySelector("#root > div > div > div.main > div.content.undefined > div > div.spin-container > div > button");
        if (element) {
            element.click();
            console.log('成功签到');
            clearInterval(计时器1); // 成功点击后结束定时器
        } else {
            console.log("计时器2未找到，继续搜索...");
        }
    } catch (error) {
        console.error("执行过程中发生错误:", error);
        // clearInterval(计时器1); // 如果出现错误，也可以选择停止
    }
}, 2500);
