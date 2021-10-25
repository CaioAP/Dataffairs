const carousel = document.createElement('template')

carousel.innerHTML = `
  <style>
    .carousel {
      position: relative;
    }
    
    .prev, .next {
      cursor: pointer;
      position: absolute;
      top: 50px;
      transform: translateY(-50%);
    }
    
    .next {
      right: 0;
    }

    .icone {
      width: var(--size-sm);
    }
  </style>

  <section class="carousel">
    <a class="prev">
      <svg class="icone" viewBox="0 0 13 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.5101 1.86985L10.7301 0.0998535L0.840088 9.99985L10.7401 19.8999L12.5101 18.1299L4.38009 9.99985L12.5101 1.86985Z" fill="#C1B6AC"/>
      </svg>
    </a>
    <a class="next">
      <svg class="icone" viewBox="0 0 13 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.489912 18.1301L2.26991 19.9001L12.1599 10.0001L2.25991 0.100146L0.489914 1.87015L8.61991 10.0001L0.489912 18.1301Z" fill="#C1B6AC"/>
      </svg>
    </a>
    <div class="carousel-items">
      <slot name="carousel-item">
        <slot name="carousel-image"></slot>
        <slot name="carousel-texto"></slot>
      </slot>
    </div>
  </section>
`

class Carousel extends HTMLElement {
  constructor() {
    super()
    this.carouselIndex = 1
    this.name = ''
    this.queryName = ''
    this.height = 0
    this.arrowSpacing = 0
  }

  navigateCarousel(movement) {
    this.hideActiveCarousel(this.carouselIndex)
    this.showCarouselItem(this.carouselIndex += movement)
  }

  hideActiveCarousel(index) {
    const carouselItems = document.querySelectorAll(`${this.queryName} .carousel-item`)
    carouselItems[index - 1].style.display = 'none'
  }

  showCarouselItem(index) {
    const carouselItems = document.querySelectorAll(`${this.queryName} .carousel-item`)

    if (index > carouselItems.length) this.carouselIndex = 1
    if (index < 1) this.carouselIndex = carouselItems.length

    carouselItems[this.carouselIndex - 1].style.display = 'grid'
  }

  resizeImages() {
    const carouselImages = document.querySelectorAll(`${this.queryName} .carousel-image`)

    if (this.height)
      for (const image of carouselImages) {
        image.style['height'] = `${this.height}px`
        image.style['max-height'] = `${this.height}px`
      }
  }

  resizeArrows() {
    const prev = this.shadowCarousel.querySelector('.prev')
    const next = this.shadowCarousel.querySelector('.next')

    if (this.height) {
      prev.style.top = `${this.height / 2}px`
      next.style.top = `${this.height / 2}px`
    } else {
      prev.style.top = '50%'
      next.style.top = '50%'
    }

    if (this.arrowSpacing) {
      prev.style.left = `${this.arrowSpacing}px`
      next.style.right = `${this.arrowSpacing}px`
    }

  }

  connectedCallback() {
    this.name = this.getAttribute('name') || this.name
    this.height = this.getAttribute('height') || this.height
    this.arrowSpacing = this.getAttribute('arrow-spacing') || this.arrowSpacing
    this.queryName = this.name ? `[name="${this.name}"]` : ''

    if (!this.shadowRoot) {
      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(carousel.content.cloneNode(true))

      this.shadowCarousel = this.shadowRoot.querySelector('.carousel')
    }

    this.shadowCarousel.querySelector('.prev').addEventListener('click', () => {
      this.navigateCarousel(-1)
    })
    this.shadowCarousel.querySelector('.next').addEventListener('click', () => {
      this.navigateCarousel(1)
    })

    this.resizeImages()
    this.resizeArrows()
    this.showCarouselItem(1)
  }
}

window.customElements.define('slide-carousel', Carousel)