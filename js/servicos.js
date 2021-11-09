const SERVICOS = {
  'data-esg': 1,
  'workshops': 2,
  'public-affairs': 3,
  'strategies': 4,
  'science-communication': 5,
}

window.onload = () => {
  const urlParams = new URLSearchParams(window.location.search)
  const servico = urlParams.get('servico')

  const servicoIndex = SERVICOS[servico]
  const elementSelector = `.servico-article:nth-of-type(${servicoIndex})`

  const element = document.querySelector(elementSelector)
  element.scrollIntoView({
    block: 'center',
    behavior: 'smooth'
  })
}