setInterval(checkAd, 100);
let firstTime = true;

function checkAd() {
  const get = (selector) => document.querySelector(selector);
  const adPlaying = get(".ytp-ad-module");
  if(!adPlaying) return;
  if(firstTime) {
    get('video').currentTime = 100;
    firstTime = false;
  }
  const skipAd = get(".ytp-ad-skip-button-slot");
  if(skipAd) {
    skipAd.click();
    firstTime = true;
    setTimeout(() => {
      get('video').currentTime = 0
    },100);
  }
}

