const setFormElementFocused = (event) => {
  event.target.input.focus()
}

const isSelectValueNotEmpty = (formElement) => {
  return !!formElement.value
}

const setFormElementSelected = (formElement) => {
  formElement.classList.add('selected')
}

const changeFormElementSelected = (event) => {
  const isSelected = event.target.className.indexOf('selected') > -1
  const hasValue = isSelectValueNotEmpty(event.target)

  if (isSelected && !hasValue) {
    return event.target.classList.remove('selected')
  }

  setFormElementSelected(event.target)
}

document.querySelectorAll('.form-input > label').forEach((formElement) => {
  formElement.input = formElement.previousElementSibling
  formElement.addEventListener('click', setFormElementFocused)
})

document.querySelectorAll('.form-select > label').forEach((formElement) => {
  formElement.input = formElement.previousElementSibling
  formElement.addEventListener('click', setFormElementFocused)
  
  formElement.input.addEventListener('change', changeFormElementSelected)

  if (isSelectValueNotEmpty(formElement.input)) {
    setFormElementSelected(formElement.input)
  }
})

