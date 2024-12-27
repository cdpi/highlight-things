
browser.browserAction.onClicked.addListener(tab =>
	{
	//browser.tabs.insertCSS(tab.id, {file: "highlight-things.css"});
	browser.tabs.executeScript(tab.id, {file: "highlight-things.js"});
	});

//browser.runtime.onMessage.addListener(message => { console.log(message); });
