document.addEventListener('DOMContentLoaded', () => {
  initCarousel ()
})

let initCarousel = (container = '.carousel') => {
  let Flkty = new Flickity(container, {

    // options
    cellAlign: 'left',
    contain: true,

    // disable previous & next buttons and dots
    prevNextButtons: false,
    pageDots: false,

    adaptiveHeight: false
  });
}