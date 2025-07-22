import Splide from '@splidejs/splide'

const root = document.querySelector('.splide')
if (root) {
  const splide = new Splide(root, {
    perPage: 3,
    rewind: true,
    gap: '33px',
    type: 'loop'
  })
  splide.mount()
}
