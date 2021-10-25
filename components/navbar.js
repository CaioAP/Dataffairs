const navbar = document.createElement('template')

navbar.innerHTML = `
  <link rel="stylesheet" href="/styles/navbar.css">

  <header class="navbar">
    <div class="container">
      <section class="nav-header">
        <img src="/assets/Logo.svg" alt="Logotipo Dataffairs" class="nav-logo logo-color">
        <img src="/assets/LogoWhite.svg" alt="Logotipo Dataffairs Branco" class="nav-logo logo-white">
        <button class="nav-burger burger-open">
          <svg width="18px" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="18" height="2" fill="#D72156"/>
            <rect y="4" width="18" height="2" fill="#D72156"/>
            <rect y="8" width="18" height="2" fill="#D72156"/>
          </svg>
        </button>
        <button class="nav-burger burger-close">
          <svg width="18px" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.67391 9.00001L0.836914 15.837L2.16291 17.163L8.99991 10.326L15.8369 17.163L17.1629 15.837L10.3259 9.00001L17.1629 2.16301L15.8369 0.837006L8.99991 7.67401L2.16291 0.837006L0.836914 2.16301L7.67391 9.00001Z" fill="#D72156"/>
          </svg>
        </button>
      </section>
      <nav class="nav-links">
        <ul>
          <li class="nav-link dropdown">
            <a href="/">
              A Dataffairs
              <svg width="8px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-down" class="svg-inline--fa fa-angle-down fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path></svg>
            </a>
            <ul>
              <li class="dropdown-item">
                <a href="/">Início</a>
              </li>
              <li class="dropdown-item">
                <a href="/equipe.html">Equipe</a>
              </li>
              <li class="dropdown-item">
                <a href="/metodologia.html">Métodos e Processos</a>
              </li>
            </ul>
          </li>
          <li class="nav-link"><a href="/servicos.html">Serviços</a></li>
          <li class="nav-link"><a href="/projetos.html">Projetos</a></li>
          <li class="nav-link"><a href="">Contato</a></li>
          <li class="nav-link"><a href="">Blog</a></li>
          <li class="nav-link"><a href="">Podcast</a></li>
        </ul>
      </nav>
    </div>
  </header>
`

class Navbar extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(navbar.content.cloneNode(true))
  }

  showMenu() {
    const navbar = this.shadowRoot.querySelector('.navbar')
    navbar.classList.add('navigation-visible')
  }

  closeMenu() {
    const navbar = this.shadowRoot.querySelector('.navbar')
    navbar.classList.remove('navigation-visible')
  }

  isDropdownVisible(display) {
    if (display && display === 'block') return true
    return false
  }

  showDropdown(event) {
    const mobileWidth = 1000

    if (window.innerWidth < mobileWidth) {
      event.preventDefault()
      event.stopPropagation()

      const dropdownElement = event.target.parentElement.lastElementChild
      
      if (dropdownElement.pathname) 
        return (window.location.href = dropdownElement.href)

      this.isDropdownVisible(dropdownElement.style.display)
        ? dropdownElement.style.display = 'none'
        : dropdownElement.style.display = 'block'
    }
  }

  getActiveNav() {
    const pathname = window.location.pathname

    if (pathname === '/') {
      return [
        this.shadowRoot.querySelector('.nav-link:nth-of-type(1)'),
        this.shadowRoot.querySelector('.nav-link:nth-of-type(1) .dropdown-item:nth-of-type(1)'),
      ]
    }

    if (/equipe/gi.test(pathname)) {
      return [
        this.shadowRoot.querySelector('.nav-link:nth-of-type(1)'),
        this.shadowRoot.querySelector('.nav-link:nth-of-type(1) .dropdown-item:nth-of-type(2)'),
      ]
    }

    if (/metodologia/gi.test(pathname)) {
      return [
        this.shadowRoot.querySelector('.nav-link:nth-of-type(1)'),
        this.shadowRoot.querySelector('.nav-link:nth-of-type(1) .dropdown-item:nth-of-type(3)'),
      ]
    }

    if (/servicos/gi.test(pathname)) {
      return [
        this.shadowRoot.querySelector('.nav-link:nth-of-type(2)'),
      ]
    }

    if (/projeto/gi.test(pathname)) {
      return [
        this.shadowRoot.querySelector('.nav-link:nth-of-type(3)'),
      ]
    }

    if (/contato/gi.test(pathname)) {
      return [
        this.shadowRoot.querySelector('.nav-link:nth-of-type(4)'),
      ]
    }

    if (/blog/gi.test(pathname)) {
      return [
        this.shadowRoot.querySelector('.nav-link:nth-of-type(5)'),
      ]
    }

    if (/podcast/gi.test(pathname)) {
      return [
        this.shadowRoot.querySelector('.nav-link:nth-of-type(6)'),
      ]
    }
  }

  setActiveNav() {
    const activeNavElements = this.getActiveNav()

    for (const navElement of activeNavElements) {
      navElement.classList.add('active')
    }
  }

  connectedCallback() {
    if (window.location.pathname === '/')
      this.shadowRoot.querySelector('.navbar').classList.add('home')

    this.setActiveNav()

    this.shadowRoot.querySelector('.nav-burger.burger-open').addEventListener('click', () => {
      this.showMenu()
    })
    this.shadowRoot.querySelector('.nav-burger.burger-close').addEventListener('click', () => {
      this.closeMenu()
    })
    this.shadowRoot.querySelector('.nav-link.dropdown').addEventListener('click', (event) => {
      this.showDropdown(event)
    })
  }
}

window.customElements.define('nav-bar', Navbar)