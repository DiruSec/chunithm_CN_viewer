var chunicommon = document.createElement('script')
chunicommon.src="https://chunithm.wahlap.com/mobile/js/common.js?ver=1.20&_t="+Date.now()
document.body.append(chunicommon)
if (location.href.match(/playlog/) || (location.href.match(/musicGenre/) && window.$(".box01_title span").length)) {
  var button = document.createElement('div')
  button.innerHTML = '<div id="btn-activate" style="box-sizing: content-box; position: fixed; left: .4rem; bottom: .4rem; width: 7.2rem; height: 1.6rem; border-radius: .4rem; background: linear-gradient(#4b5e71, #000000); line-height: 1.6rem; padding: .4rem .8rem; border: .2rem solid #fefeee; color: #fff; font-weight: 500;">打开查分器</div>'
  button.addEventListener("click", function() {
    var chuni = document.createElement('script')
    chuni.src = "https://raw.githubusercontent.com/DiruSec/chunithm_CN_viewer/refs/heads/main/chunithm.js"
    document.body.append(chuni)
    button.innerText = "请等待…"
  }, { once: true })
  document.body.append(button)
}