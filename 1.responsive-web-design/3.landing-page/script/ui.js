// * 个人自定义特效组件（仅适用于 Bootstrap）
class UI {
  constructor() {
    this.selectors = {
      header: '#header',
      navbar: '#nav-bar', 
      userType: '.banner-div .bi'
    }
  }

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
    if (target.classList.contains('bi')) {
      // the selected item would cancel selection when clicked again
      if (target.classList.contains('selected')) {
        this.unselectListItem(target)
      } else {
        // check if any selected list items
        this.cancelCurrentSelected()
        this.selectListItem(target)
        target.dataset.current = 'true'
      }
    }
  }

  selectedStyleToggle(target) {
    if (target.classList.contains('bi')) {
      // the selected item would cancel selection when clicked again
      if (target.classList.contains('selected')) {
        this.unselectListItem(target)
      } else {
        // check if any selected list items
        this.cancelCurrentSelected()
        this.selectListItem(target)
        target.dataset.current = 'true'
      }
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
