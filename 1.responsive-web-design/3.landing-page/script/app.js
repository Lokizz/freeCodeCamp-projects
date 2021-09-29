const ui = new UI()
window.addEventListener('scroll', (e) => {
  // ! 转换为数值进行比较
  let currentScrollY = parseInt(window.scrollY)
  const globalFontSize = parseInt(getComputedStyle(document.body)['font-size'])

  if (currentScrollY >= 3 * globalFontSize) {
    ui.changeNavBackground()
  } else {
    ui.recoverNavBackground()
  }
})

const selectList = document.querySelectorAll('.banner-div .list-group-item')

selectList.forEach(item => {
  item.addEventListener('click', (e) => {
    ui.selectedStyleToggle(e.target)
  })
})