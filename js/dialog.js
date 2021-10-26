const mostrarDialog = (dialogId) => {
  const dialog = document.getElementById(dialogId)
  const dialogWrapper = document.querySelector('.dialog')

  console.log(dialogWrapper.style.display)
  dialogWrapper.style.display = 'grid'
  console.log(dialogWrapper.style.display)
  dialog.setAttribute('open', true)
}

const fecharDialog = (dialogId) => {
  const dialog = document.getElementById(dialogId)
  const dialogWrapper = document.querySelector('.dialog')

  console.log(dialogWrapper.style.display)
  dialogWrapper.style.display = 'none'
  console.log(dialogWrapper.style.display)
  dialog.removeAttribute('open')
}

const dialogWrapper = document.querySelector('.dialog')
dialogWrapper.style.display = 'none'