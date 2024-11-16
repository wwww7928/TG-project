// ==UserScript==
// @name        birds1.0
// @namespace   Violentmonkey Scripts
// @match       https://birdx.birds.dog/*
// @grant       none
// @version     1.0
// @author      -
// @grant        GM_addStyle
// @grant        GM_setValue
// @grant        GM_getValue
// @description 2024/11/14 19:13:48
// ==/UserScript==

(function() {
    const body = document.body;

    // 设置页面的基本样式
    body.style.fontFamily = 'Arial, sans-serif';
    body.style.margin = '0';
    body.style.paddingTop = '0';  // 清除顶部的padding，避免白边
    body.style.overflowX = 'hidden';  // 防止页面水平滚动条出现

    // 创建一个包含菜单的容器
    const menuContainer = document.createElement('div');
    menuContainer.style.position = 'fixed';  // 使用固定定位
    menuContainer.style.top = '20px';        // 距离顶部20px
    menuContainer.style.right = '20px';      // 距离右边20px
    menuContainer.style.width = '180px';     // 调整宽度
    menuContainer.style.height = '200px';    // 调整高度
    menuContainer.style.padding = '10px';
    menuContainer.style.backgroundColor = '#f1f1f1'; // 背景色
    menuContainer.style.borderRadius = '8px';  // 圆角
    menuContainer.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)'; // 阴影
    menuContainer.style.zIndex = '1000';   // 设置较高的z-index，使其位于页面之上
    body.appendChild(menuContainer);

    // 创建“签到”按钮
    const signInButton = document.createElement('button');
    signInButton.textContent = '签到';
    signInButton.style.fontSize = '16px';
    signInButton.style.padding = '10px 20px';
    signInButton.style.margin = '5px';
    signInButton.style.cursor = 'pointer';
    signInButton.style.width = '100%';  // 按钮宽度占满菜单容器
    menuContainer.appendChild(signInButton);

    // 创建“敲蛋”按钮
    const eggButton = document.createElement('button');
    eggButton.textContent = '敲蛋';
    eggButton.style.fontSize = '16px';
    eggButton.style.padding = '10px 20px';
    eggButton.style.margin = '5px';
    eggButton.style.cursor = 'pointer';
    eggButton.style.width = '100%';  // 按钮宽度占满菜单容器
    menuContainer.appendChild(eggButton);

    // 创建“停止”按钮
    const stopButton = document.createElement('button');
    stopButton.textContent = '停止';
    stopButton.style.fontSize = '16px';
    stopButton.style.padding = '10px 20px';
    stopButton.style.margin = '5px';
    stopButton.style.cursor = 'pointer';
    stopButton.style.width = '100%';  // 按钮宽度占满菜单容器
    stopButton.disabled = true; // 初始时禁用停止按钮
    menuContainer.appendChild(stopButton);

    // 创建状态文本
    const statusText = document.createElement('p');
    statusText.textContent = '程序未运行';
    statusText.style.fontSize = '16px';
    statusText.style.margin = '0';
    menuContainer.appendChild(statusText);

    // 标记程序是否正在运行
    let issignRuning = false;
    let iseggRuning = false;

    // “签到”按钮的点击事件
    signInButton.addEventListener('click', function() {
        issignRuning = true;  // 标记签到按钮点击状态
      statusText.textContent = '签到正在运行...';
      console.log("签到按钮被点击");
      stopButton.disabled = false;  // 启用停止按钮
        start();

    });
    // “敲蛋”按钮的点击事件
    eggButton.addEventListener('click', function() {
        iseggRuning = true;  // 标记敲蛋按钮点击状态
        console.log("敲蛋按钮被点击");
        statusText.textContent = '敲蛋正在运行...';
        stopButton.disabled = false;  // 启用停止按钮
        start();
    });
    // “停止”按钮的点击事件
    stopButton.addEventListener('click', function() {
        if (issignRuning || iseggRuning) {
            issignRuning = false;
            iseggRuning = false;
            statusText.textContent = '程序已停止.';
            console.log("停止按钮被点击");
            // 更新按钮状态
            eggButton.disabled = fals
            signInButton.disabled = false;
            stopButton.disabled = true;
        }
    });


    // 使菜单可以被拖动
    let offsetX, offsetY, isDragging = false;

    menuContainer.addEventListener('mousedown', function(event) {
        isDragging = true;
        // 记录鼠标点击位置相对于菜单的偏移
        offsetX = event.clientX - menuContainer.getBoundingClientRect().left;
        offsetY = event.clientY - menuContainer.getBoundingClientRect().top;
        // 禁止文本选中
        body.style.userSelect = 'none';
    });

    document.addEventListener('mousemove', function(event) {
        if (isDragging) {
            // 更新菜单的位置
            menuContainer.style.left = `${event.clientX - offsetX}px`;
            menuContainer.style.top = `${event.clientY - offsetY}px`;
        }
    });

    document.addEventListener('mouseup', function() {
        isDragging = false;
        // 恢复文本选中
        body.style.userSelect = 'auto';
    });

    // 延时函数
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // 延时执行
    async function execute(delayTime) {
        await delay(delayTime);
    }

      // 检查继续按钮是否存在
    async function cheakcontinue() {
        const continueButton = document.querySelector("#root > div > div > main > div > div.fixed.bottom-0.left-0.right-0.bg-gradient-to-t.from-\\[\\#0a0036\\].from-\\[50\\%\\].to-transparent.pt-16 > div.absolute.bottom-8.left-0.right-0.px-\\[15px\\].z-\\[9999\\] > button");
        const worm = document.querySelector("#worm");
        const Wow = document.querySelector("#\\:rd\\: > footer > div > button");
      if (continueButton) {
            continueButton.click();
            console.log("开始");
            return;
        }
      if (worm) {
            worm.click();
            return;
        }
      if (Wow) {
            Wow.click();
            return;
        }
        console.log("未找到");
        await delay(2000);  // 等待2秒后再检查
        cheakcontinue();  // 递归调用
    }

    // 执行“破蛋”操作
    async function eggbreaking() {
        // 如果程序已经停止，则退出
        if (!iseggRuning) {
            console.log("程序已停止");
            return;
        }
        const button1 = document.querySelector("#root > div > div > main > div > div > div.flex.flex-col.items-center.justify-center.relative.w-full.h-\\[420px\\].mt-4.mb-4 > a:nth-child(2) > img");
        const button2 = document.querySelector("#root > div > div > main > div > div > a > img");
        const button3 = document.querySelector("#root > div > div > main > div.pb-\\[100px\\] > div.flex.items-center.justify-center.py-3 > div > div.absolute.top-1\\/3.left-9.animate-wiggle.origin-bottom.z-10 > img");
        const button4 = document.querySelector("#root > section > ol > li:nth-child(3)");

        // 检查是否已经完成
        if (button4) {
            console.log("已完成");
            return;
        }

        // 执行步骤一、二、三，并在所有条件不满足时打印“未找到按钮”
        if (button1) {
            button1.click();
            console.log("步骤一已执行");
        } else if (button2) {
            button2.click();
            console.log("步骤二已执行");
        } else if (button3) {
            button3.click();
            console.log("步骤三已执行");
            await execute(3000);  // 延时3秒
        } else {
            // 如果所有按钮条件都没有找到，打印未找到按钮
            console.log("未找到按钮");
        }

        // 等待2秒后再检查
        await delay(2000);  // 等待2秒后再检查
        // 如果程序仍在运行，继续递归调用
        if (iseggRuning) {
            eggbreaking();  // 递归调用
        }
    }

    async function signing(){
      if (!issignRuning) {
            console.log("程序已停止");
            return;
      }
        const button1 = document.querySelector("#root > div > div > main > div > div > div.flex.flex-col.items-center.justify-center.relative.w-full.h-\\[420px\\].mt-4.mb-4 > a:nth-child(2) > img");
        const button5 = document.querySelector("#root > div > div > main > div > div > div:nth-child(1) > a > img");
        const day1 = document.querySelector("#root > div > div > main > div > div > div > button:nth-child(1)");
        const day2 = document.querySelector("#root > div > div > main > div > div > div > button:nth-child(2)");
        const day3 = document.querySelector("#root > div > div > main > div > div > div > button:nth-child(3)");
        const day4 = document.querySelector("#root > div > div > main > div > div > div > button:nth-child(4)");
        const day5 = document.querySelector("#root > div > div > main > div > div > div > button:nth-child(5)");
        const day6 = document.querySelector("#root > div > div > main > div > div > div > button:nth-child(6)");
        const day7 = document.querySelector("#root > div > div > main > div > div > div > button:nth-child(7)")
        const Approve = document.querySelector("body > div.swal2-container.swal2-center.swal2-backdrop-show > div > div.swal2-actions > button.swal2-confirm.swal2-styled.swal2-default-outline");
      console.log("签到开始");
      if (button1) {
            button1.click();
        }
      if (button5) {
            button5.click();
        }
       if (day1) {
          day1.click();
        }
      if (day2) {
          day2.click();
        }
      if (day3) {
          day4.click();
        }
      if (day4) {
          day4.click();
        }
      if (day5) {
          day5.click();
        }
      if (day6) {
          day6.click();
        }
      if (day7) {
          day7.click();
        }
       if (Approve) {
          Approve.click();
         stopButton.click();
         console.log("签到成功")

        }

      // 等待2秒后再检查

      await delay(1000);  // 等待2秒后再检查
        // 如果程序仍在运行，继续递归调用
        if (issignRuning) {
            signing();  // 递归调用

         }
    }
    // 启动函数
    async function start() {
        // 在启动时检查是否运行，并执行 eggbreaking
        if (iseggRuning) {
            await eggbreaking();  // 触发破蛋操作
        }
        if (issignRuning) {
            await signing();  // 触发签到操作
        }

    }
   // 启动任务
    cheakcontinue();  // 启动检查继续按钮的函数

})();
