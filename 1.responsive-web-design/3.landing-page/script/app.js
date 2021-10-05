const ui = new UI()
// ? Event listeners
document.addEventListener('scroll', navbarAnimation)
document.addEventListener('scroll', navbarActiveItem)
document.addEventListener('scroll', ui.backToTopBtnRender)
document.addEventListener('click', backToTop)

// ? Banner 部分选择项目的特效
const selectList = document.querySelectorAll('.banner-div .list-group-item')

selectList.forEach(item => {
  item.addEventListener('click', (e) => {
    ui.selectedStyleToggle(e.target)
  })
})

// ? 依据鼠标的滚动距离决定导航栏的样式
function navbarAnimation() {
  // ! 转换为数值进行比较
  const currentScrollY = parseInt(window.scrollY)
  const globalFontSize = parseInt(getComputedStyle(document.body)['font-size'])

  if (currentScrollY >= 3 * globalFontSize) {
    ui.changeNavBackground()
  } else {
    ui.recoverNavBackground()
  }
}

// ? 依据滚动位置决定导航栏当前高亮项目
function navbarActiveItem() {
  const navbarItems = document.querySelectorAll('.nav-link')

  navbarItems.forEach(item => {
    // ! 通过 href 属性确定对应的 section
    const itemID = item.href.split('#')[1]
    const itemDiv = document.getElementById(itemID)

    ui.navbarItemHighlight(item)
  })
}

// ? 移除回到顶部的按钮
function backToTop(e) {
  if (e.target.classList.contains('top-btn') || e.target.classList.contains('bi-arrow-bar-up')) {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}