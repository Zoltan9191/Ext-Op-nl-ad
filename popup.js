function setDOMInfo(info) {
 document.getElementById('message').textContent = info.message;
 document.getElementById('url').textContent = info.url;
 document.getElementById('download').href = info.urlShort;
 document.getElementById('download').textContent = "Download";
 document.getElementById('newTab').href = info.url;
 document.getElementById('newTab').textContent = "Open video in new tab (no ads)";
 document.getElementById('enjoy').textContent = "I hope you enjoy this 0_^";
 document.getElementById('notif').textContent = "";
}

window.addEventListener('DOMContentLoaded', function () {
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function (tabs) {
    chrome.tabs.sendMessage(
        tabs[0].id,
        {from: 'popup', subject: 'DOMInfo'},
        setDOMInfo);
  });
});