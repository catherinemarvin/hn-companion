var regex = /Kevin/;

// Test text of body against regex.

if (regex.test(document.body.innerText)) {
  //produced a match, notify background page.
  chrome.extension.sendRequest({}, function (response) {});
} else {
  // no match found.
}