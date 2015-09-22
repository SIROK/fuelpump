!(function () {

  // サイドバーメニュー
  var menu = document.querySelector('.header__menu')
  var main = document.querySelector('main')
  menu.addEventListener('click', function(e){
    e.preventDefault()
    // 属性値があれば
    if (menu.hasAttributes()) {
      var a = menu.attributes[0]
      if ( a.value == '' ) {
        menu.setAttribute(a.name, 'active')
        main.style['transform'] = 'translate3d(210px, 0px, 0px)'
      } else {
        menu.setAttribute(a.name, '')
        main.style['transform'] = ''
      }
    }
  })

}())
