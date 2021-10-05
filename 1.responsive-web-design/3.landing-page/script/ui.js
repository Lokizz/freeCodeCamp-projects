// * 个人自定义特效组件（仅适用于 Bootstrap）
class UI {
  constructor() {
    this.selectors = {
      header: '#header',
      navbar: '#nav-bar', 
      userType: '.banner-div .bi'
    }
  }

  backToTopBtnRender() {
    const scrollY = parseInt(window.scrollY)
    const fontSize = parseInt(getComputedStyle(document.body)['font-size'])

    if (scrollY >= 10 * fontSize) {
      const btnContainer = document.createElement('div')

      btnContainer.className = 'top-btn'
      btnContainer.innerHTML = `
        <i class="bi bi-arrow-bar-up text-light fs-2 px-1"></i>
      `
      document.body.appendChild(btnContainer)
    } else if (scrollY <= 5 * fontSize && document.querySelector('.top-btn')) {
      document.querySelector('.top-btn').remove()
    }
  }

  // backToTopBtnRemove() {
  //   document.querySelector('.top-btn').style.display = 'none'
  // }

  changeNavBackground() {
    const navbar = document.querySelector(this.selectors.navbar)
    // Change the navbar background color to white
    navbar.classList.add('bg-secondary')
    // Added the customized animation
    navbar.classList.add('drop-in')
  }

  recoverNavBackground() {
    const navbar = document.querySelector(this.selectors.navbar)
    // Revert the background color and remove the animation
    navbar.classList.remove('bg-secondary')
    navbar.classList.remove('drop-in')
  }

  navbarItemHighlight(item) {
    // ! 通过 href 属性确定对应的 section
    const itemID = item.href.split('#')[1]
    const itemDiv = document.getElementById(itemID)
    const itemRect = itemDiv.getBoundingClientRect()

    // if ((itemRect.top <= 60 && itemRect.bottom > 100) || (itemID === 'pricing' && itemRect.top <= itemRect.height / 2))
    if (itemRect.top <= 80 && itemRect.bottom > 100) {
      item.classList.add('active-item')
    } else {
      item.classList.remove('active-item')
    }
  }

  selectedStyleToggle(target) {
    // ! 获取真正点击的元素
    const icon = target.querySelector('.bi') ? target.querySelector('.bi') : target
    // the selected item would cancel selection when clicked again
    if (icon.classList.contains('selected')) {
      this.unselectListItem(icon)
    } else {
      // check if any selected list items
      this.cancelCurrentSelected()
      this.selectListItem(icon)
      icon.dataset.current = 'true'
    }
  }

  selectListItem(target) {
    // remove the white background color
    target.classList.remove('text-secondary')
    target.classList.replace('bi-circle-fill', 'bi-check2-circle')
    // add the customized animation
    target.classList.add('selected')
  }

  unselectListItem(target) {
    target.classList.remove('selected')
    target.classList.replace('bi-check2-circle', 'bi-circle-fill')
    // change the icon background color to white
    target.classList.add('text-secondary')
  }

  cancelCurrentSelected() {
    const userTypes = document.querySelectorAll(this.selectors.userType)
    userTypes.forEach(item => {
      if (item.dataset.current) {
        this.unselectListItem(item)
      }
    })
  }
}
