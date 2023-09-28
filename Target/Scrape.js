(function () {
    setInterval(function () {
        var _a;
        (_a = document
            .querySelector('[data-tooltip="Add to collection"]')) === null || _a === void 0 ? void 0 : _a.click();
        setTimeout(function () {
            var _a;
            (_a = document.querySelector(".add-to-saved")) === null || _a === void 0 ? void 0 : _a.click();
            setTimeout(function () {
                var _a;
                (_a = document
                    .querySelector(".upnext-item.active + .upnext-item img")) === null || _a === void 0 ? void 0 : _a.click();
            }, 1000);
        }, 500);
    }, 3000);
})();
