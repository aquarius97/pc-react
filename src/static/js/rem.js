/* rem算法 */
(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if(clientWidth > 1336) {
                let fontSize = document.getElementsByTagName('html')[0].style.fontSize = clientWidth / 19.2 + "px";
            }else{
                let fontSize = document.getElementsByTagName('html')[0].style.fontSize = 1336 / 19.2 + "px";
            }
        };
    recalc();
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);

})(document, window);
