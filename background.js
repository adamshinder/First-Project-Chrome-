console.log ('background running');

chrome.browserAction.onClicked.addListener(buttonClicked);
//"browser_action": {} //idk if neccesary

function buttonClicked (tab) {
  let msg = {
    txt:"hello"
  }
 chrome.tabs.sendMessage (tab.id, msg);
}

//var onClicked = document.getElementById("newTaskButton");

/*
let e = require('electron')
e.webFrame.registerURLSchemeAsPrivileged('chrome-extension')
// NOTE: your directory will be different.  see https://electronjs.org/docs/tutorial/devtools-extension
e.remote.BrowserWindow.addDevToolsExtension('/Users/Bee/Library/Application Support/Google/Chrome/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/3.2.1_0')
*/
