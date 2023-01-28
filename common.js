document.write('<script src="https://chunithm.wahlap.com/mobile/js/common.js?ver=1.00"></script>')
if (location.href.match(/playlog/) || (location.href.match(/musicGenre/) && window.$(".box01_title span").length)) {
    document.write('<script src="https://cdn.jsdelivr.net/gh/DiruSec/chunithm_CN_viewer@master/chunithm.js"></script>')
}
