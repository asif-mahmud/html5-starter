/**
 * Created by shimon on 1/17/17.
 */
var addClass = function (el, cls) {
    if(el.classList){
        el.classList.add(cls);
    }else{
        el.className = cls;
    }
};
var removeClass = function (el, cls) {
    if (el.classList) {
        el.classList.remove(cls);
    }
    else {
        el.className =
            el.className.replace(
                new RegExp('(^|\\b)' +
                    cls.split(' ').join('|') +
                    '(\\b|$)', 'gi'),
                ' '
            );
    }
};