module.exports = function(url, cb) {
  var id = 'j' + (Math.random() * (1<<30)).toString(16).replace('.', '')
    , script = document.createElement('script')

  window._jsonp_callbacks[id] = function(res) {
    cb && cb(res)
    delete window._jsonp_callbacks[id]
    script.parentNode.removeChild(script)
  }

  script.src = url.replace('callback=%3F', 'callback=_jsonp_callbacks.' + id)
  document.getElementsByTagName('head')[0].appendChild(script)
}
window._jsonp_callbacks = {}
