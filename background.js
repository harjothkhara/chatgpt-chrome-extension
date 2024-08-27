chrome.browserAction.onClicked.addListener(function() {
  chrome.tabs.create({ url: "https://chat.openai.com" });
});
