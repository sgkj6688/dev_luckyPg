/**
 * 等待启动页真正可点击。接收已有 Browser Use tab，不读取游戏内部状态。
 * 按钮 visible 时，旧加载遮罩仍可能处于退场动画中，不能立即点击。
 */
export async function waitForStartReady(tab, timeoutMs = 15000) {
  const button = tab.playwright.locator('.start-button');
  await button.waitFor({ state: 'visible', timeoutMs });
  await tab.playwright.locator('#initial-loader').waitFor({
    state: 'detached',
    timeoutMs,
  });
  const readiness = await button.evaluate((element) => {
    const rect = element.getBoundingClientRect();
    const x = rect.x + rect.width / 2;
    const y = rect.y + rect.height / 2;
    const hit = document.elementFromPoint(x, y);
    const style = getComputedStyle(element);
    return {
      path: location.pathname,
      viewport: [innerWidth, innerHeight],
      loaderAbsent: !document.querySelector('#initial-loader'),
      buttonShown: /(?:^|\s)start-button-show-/.test(element.className)
        && !element.classList.contains('start-button-hide'),
      hasArea: rect.width > 0 && rect.height > 0,
      visible: Number(style.opacity) > 0 && style.visibility === 'visible',
      centerHit: hit === element || element.contains(hit),
      center: [x, y],
      hitClass: hit?.className || '',
    };
  });
  if (!readiness.loaderAbsent || !readiness.buttonShown || !readiness.hasArea
      || !readiness.visible || !readiness.centerHit) {
    // 条件不足时保留失败，不用第二次点击掩盖首击问题。
    throw new Error(`Start button is not ready: ${JSON.stringify(readiness)}`);
  }
  return readiness;
}

/** 仅点击一次，再验证启动遮罩消失；失败由调用方记录，不自动重试点击。 */
export async function startGameOnce(tab, timeoutMs = 15000) {
  const readiness = await waitForStartReady(tab, timeoutMs);
  await tab.playwright.locator('.start-button').click({ timeoutMs });
  await tab.playwright.locator('.start-button').waitFor({
    state: 'hidden',
    timeoutMs,
  });
  return { readiness, startClickAttempts: 1, entered: true };
}
