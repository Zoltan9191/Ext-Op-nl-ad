chrome.runtime.onMessage.addListener(function (msg, sender) {
 if ((msg.from === 'showUrl') && (msg.subject === 'showPageAction')) {
    chrome.pageAction.show(sender.tab.id);
  }
});