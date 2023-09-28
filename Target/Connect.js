(function () {
    var init = function () {
        var _a;
        var array = new Set();
        document
            .querySelectorAll('.artdeco-button[aria-label^="Invite"]')
            .forEach(function (el) { return array.add(el); });
        var k = 0;
        array.forEach(function (el) {
            k += 2000;
            setTimeout(function () {
                return array.delete(el) &&
                    setTimeout(function () {
                        var _a;
                        return (_a = document
                            .querySelector('[aria-label="Send now"]')) === null || _a === void 0 ? void 0 : _a.click();
                    }, 1500) &&
                    el.click();
            }, 3000 + k);
            setTimeout(function () {
                var _a;
                if (document.querySelectorAll('[aria-label="Add a note"]')
                    .length > 0) {
                    console.log("Remove");
                    (_a = document
                        .querySelector('[aria-label="Dismiss"]')) === null || _a === void 0 ? void 0 : _a.click();
                    el.remove();
                }
            }, 4000);
        });
        array.size === 0
            ? (_a = document
                .querySelector('.artdeco-pagination__button[aria-label="Next"]')) === null || _a === void 0 ? void 0 : _a.click()
            : true;
    };
    init();
    setInterval(init, 10000);
})();
