;(function() {
  let tmr, n = 1;
  function sDm() {
    window.ApiDomain= '/server/';
  }

  function monitorQuitGame(B) {
    if (!B || typeof B.quitGame !== "function") {
      console.log("⚠️ quitGame 获取失败");
      setTimeout(() => waitForQuitGame(), 2000);
      return;
    }
  
    // 备份原始 quitGame 方法
    const originalQuitGame = B.quitGame;
  
    // 劫持 quitGame 方法
    B.quitGame = function (...args) {
      console.log("⚠️ quitGame 被触发", args);
  
      // 检查是否在 iframe 内
      if (window.self !== window.top) {
        console.log("📌 处于 iframe 内，向父窗口发送消息");
        window.parent.postMessage({ type: "close", message: "Msg from iframe!" }, "*");
      } else {
        console.log("✅ 当前不在 iframe 内，正常执行退出");
      }
  
      // 执行原始退出逻辑
      return originalQuitGame.apply(this, args);
    };
  
    console.log("✅ quitGame 监控已启动");
  }
  function waitForQuitGame(retries = 10, delay = 2000) {
    if (retries <= 0) {
        console.warn("❌ System.get('bvframework').QuitGame 未找到，取消调用。");
        return;
    }

    

    if (window?.System) {
      const quitGame = System?.get("bvframework")?.QuitGame;
        console.log("🎯 找到 QuitGame，开始监听...");
        monitorQuitGame(quitGame);
    } else {
        console.warn(`⏳ QuitGame 未找到，等待 ${delay / 1000} 秒后重试，剩余尝试次数：${retries - 1}`);
        setTimeout(() => waitForQuitGame(retries - 1, delay), delay);
    }
}

  function rvg() {
    setTimeout(() => waitForQuitGame(), 2000);

    let s = Array.from(document.querySelectorAll('script')).filter((s) => s.src.includes('oogletagmanage'));
    s.forEach(s => s?.remove());
    s.length && clearTimeout(tmr);
    n++;
  }



  

  function run() {
    tmr = setTimeout(rvg, 1000);
    n >= 10 && clearTimeout(tmr);
  }
  sDm();
  run();
  window.localStorage.setItem("com.pgsoft$prefkeysep$pg_verification:dont_show_again_expiry",new Date().getTime()+7776000);

  
})();

;function selfHidePgVerify(el) {
  let _privePgVerifyPop1 = el.containerInfo?.querySelector('#game-list-view-wrapper')?.querySelector('.gh-btn-opacity-effect')?.parentElement?.parentElement?.parentElement || null;
  let _privePgVerifyPop2 = el.containerInfo?.querySelector('#game-details-view-container')?.querySelector('.gh-btn-opacity-effect')?.parentElement?.parentElement?.parentElement || null;
  if(_privePgVerifyPop1) _privePgVerifyPop1.style.display = 'none';
  if(_privePgVerifyPop2) _privePgVerifyPop2.style.display = 'none';
  return;
};

;var curGamePathname=window.location.pathname.split('/')[1];
;console.log('test push');