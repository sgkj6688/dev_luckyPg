(function () {
    let tmr,
        n = 1;
    function sDm() {
        let list = location.search.split("&");
        let find = false;
        for (let i of list) {
            let index = i.indexOf("=");
            if (index) {
                let s = i.substring(0, index);
                let v = i.substring(index + 1);
                if (s == "server") {
                    window.ApiDomain = v;
                    find = true;
                    break;
                }
            }
        }
        if (!find) window.ApiDomain = "http://3.1.13.113:8000";
    }

    sDm();
})();
