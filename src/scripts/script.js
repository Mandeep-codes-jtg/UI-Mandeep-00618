import Splide from '@splidejs/splide'

const splide = new Splide('.splide', {
  perPage: 3,
  rewind: true,
  gap: '33px',
  type: 'loop'
})

splide.mount()
