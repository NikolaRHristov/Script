(function () {
    var init = function () {
        var _Array = new Set();
        document
            .querySelectorAll('[data-testid="unlike"]')
            .forEach(function (el) { return _Array.add(el); });
        var k = 0;
        var _loop_1 = function (el) {
            k += 50;
            setTimeout(function () {
                el.scrollIntoView();
                _Array.delete(el);
                el.click();
            }, 50 + k);
        };
        for (var _i = 0, _Array_1 = _Array; _i < _Array_1.length; _i++) {
            var el = _Array_1[_i];
            _loop_1(el);
        }
    };
    init();
    setInterval(function () { return window.scrollTo(0, window.scrollY + 500); }, 1000);
    setInterval(function () { return init(); }, 1000);
})();
