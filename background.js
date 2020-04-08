const defaultFilters = [
    "*://*.zedo.com/*"
]

chrome.webRequest.onBeforeRequest.addListener(
function(details) { return {cancel:true }},
{urls:defaultFilters},
['blocking']
)