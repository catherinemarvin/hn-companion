// Called when a message is passed.

var onRequest = function (request, sender, sendResponse) {
  //show the page action for the tab that the sender (content script was on)
  chrome.pageAction.show(sender.tab.id);

  //return nothing to clean connection up
  sendResponse({});
};

//listen for content script to send a message to the background page.
chrome.extension.onRequest.addListener(onRequest);