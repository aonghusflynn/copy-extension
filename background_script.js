chrome.browserAction.onClicked.addListener(function (tab) {
  console.log("begin");

  document.addEventListener("DOMSubtreeModified", function () {
    alert("something has been changed on page, you should update href tag");
  });
});
