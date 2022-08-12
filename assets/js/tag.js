/* eslint-disable */
/*!
 * 24/7 Customer, Inc. Confidential, Do Not Distribute. This is an
 * unpublished, proprietary work which is fully protected under
 * copyright law. This code may only be used pursuant to a valid
 * license from 24/7 Customer, Inc. http://www.247-inc.com
 */
window.SN = function(o) {
    function n(o) {
        return document.cookie.replace(new RegExp("(?:^|.*;\\s*)" + o.replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*"), "$1")
    }

    function e() {
        var o = "https://" + t + "/" + a + "/247px.js",
            n = document.createElement("script");
        n.setAttribute("crossorigin", ""), n.async = !0, n.src = o;
        var e = document.getElementsByTagName("script")[0];
        e.parentNode.insertBefore(n, e)
    }
    o.clientKey = 'tfsdemo-v1-001';
    o.cdnRoot = "d1af033869koo7.cloudfront.net";
    o.configroot = "https://d1af033869koo7.cloudfront.net/content/"
    var t = "d1af033869koo7.cloudfront.net",
        a = "psp/platform",
        s = "sn.env";
    switch (n(s)) {
        case "dev":
            o.cdnRoot = "dev-sd.s3.amazonaws.com", t = "dev-sd.s3.amazonaws.com", a = "psp/platform";
            break;
        case "qa":
            o.cdnRoot = "sd-qa.s3.amazonaws.com", t = "sd-qa.s3.amazonaws.com", a = "psp/platform"
    }
    return e(), o
}(window.SN || {});
