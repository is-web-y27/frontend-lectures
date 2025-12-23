var counter = (function() {
    let a = 5;

    function inc() {
        a += 1;
    }

    function get() {
        return a;
    }

    return { inc, get };
})();
