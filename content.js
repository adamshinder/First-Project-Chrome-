console.log ("Chrome Extension Go");

let paragraphs = document.getElementsByTagName('p');
for (elt of paragraphs) {
  elt.style['background-color'] = '#FF00FF';
}

chrome.runtime.onMessage.addListener (gotMessage);

function gotMessage(message, sender, sendResponse) {
console.log(message.txt);
}
