function browserHistory(browserObj, commandData) {
    for (const line of commandData) {
        if (line === 'Clear History and Cache') {
            browserObj["Open Tabs"] = []
            browserObj["Recently Closed"] = []
            browserObj["Browser Logs"] = []
        } else {
            let currentTabData = line.split(' ')
            let command = currentTabData[0]
            let tab = currentTabData[1]
            if (command === 'Open') {
                browserObj["Open Tabs"].push(tab)
                browserObj["Browser Logs"].push(line)
            } else if (command === 'Close') {
                if (browserObj["Open Tabs"].includes(tab)) {
                    let tabIndex = browserObj["Open Tabs"].indexOf(tab)
                    browserObj["Open Tabs"].splice(tabIndex, 1)
                    browserObj["Browser Logs"].push(line)
                    browserObj["Recently Closed"].push(tab)
                }
            }
        }
    }
    console.log(browserObj["Browser Name"])
    console.log(`Open Tabs: ${browserObj["Open Tabs"].join(', ')}`)
    console.log(`Recently Closed: ${browserObj["Recently Closed"].join(', ')}`)
    console.log(`Browser Logs: ${browserObj["Browser Logs"].join(', ')}`)
}

browserHistory({
        "Browser Name":"Google Chrome",
        "Open Tabs":["Facebook","YouTube","Google Translate"],
        "Recently Closed":["Yahoo","Gmail"],
        "Browser Logs":["Open YouTube","Open Yahoo","Open Google Translate","Close Yahoo","Open Gmail","Close Gmail","Open Facebook"]},
    ["Close Facebook", "Open StackOverFlow", "Open Google"])

// browserHistory({"Browser Name":"Mozilla Firefox",
//         "Open Tabs":["YouTube"],
//         "Recently Closed":["Gmail", "Dropbox"],
//         "Browser Logs":["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]},
//     ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
// )