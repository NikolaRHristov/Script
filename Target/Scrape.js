setInterval(()=>{document.querySelector('[data-tooltip="Add to collection"]')?.click(),setTimeout(()=>{document.querySelector(".add-to-saved")?.click(),setTimeout(()=>{document.querySelector(".upnext-item.active + .upnext-item img")?.click()},1e3)},500)},3e3);
