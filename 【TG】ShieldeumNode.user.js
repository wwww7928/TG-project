// ==UserScript==
// @name        【TG】ShieldeumNode
// @namespace   【TG】ShieldeumNode
// @match       https://hostingking.in/*
// @grant       none
// @version     1.0
// @author      -
// @description 2024/11/14 18:45:08
// ==/UserScript==


// 点击签到
var 计时器1 = setInterval(function() {
    try {
        // 查找并点击元素
        var element = document.querySelector("#app > main > div.daily-reward.active > div > button");
        if (element) {
            element.click();
            console.log('点击签到成功');
            clearInterval(计时器1); // 成功点击后停止定时器
        } else {
            console.log("继续搜索签到...");
        }
    } catch (error) {
        console.error("签到发生错误:", error);
        // clearInterval(计时器1); // 如果出现错误，也可以选择停止
    }
}, 1500);

// 点击领取每日奖励
var 计时器2 = setInterval(function() {
    try {
        // 查找并点击元素
        var element = document.querySelector("#app > main > section > div.farmin-grid > button");
        if (element) {
            element.click();
            console.log('领取每日奖励成功');
            clearInterval(计时器2); // 成功点击后停止定时器
        } else {
            console.log("继续搜索每日奖励...");
        }
    } catch (error) {
        console.error("领取每日奖励发生错误:", error);
        // clearInterval(计时器2); // 如果出现错误，也可以选择停止
    }
}, 1500);
