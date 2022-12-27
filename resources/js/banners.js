document.addEventListener('DOMContentLoaded', () => {
  let bannerTemplate = document.getElementById('store-highlights')
  let container = document.getElementById('highlights')

  skeleton(container, bannerTemplate, 4)

  displayBanners(container, bannerTemplate)
})


/**
 * 
 * Fetches banners data from a json file
 * Displays banners as a caousel
 * 
 * @param {*} container 
 * @param {*} bannerTemplate 
 */

let displayBanners = (container, bannerTemplate) => {

  
  // Remove slider functionnality
  container.classList.remove('carousel')
  
  fetch('./resources/data/banners.json')
  .then((response) => {
    return response.json()
  })
  .then((banners) => {
    
    resetContainer(container)

    banners.forEach(banner => {
      let div = bannerTemplate.content.cloneNode(true)
      
      div.querySelector('.banner-title').textContent = banner.title
      div.querySelector('.banner-description').textContent = banner.description
      div.querySelector('.banner-title').classList.remove('skeleton')
      div.querySelector('.banner-description').classList.remove('skeleton')

      div.querySelector('.banner').href = banner.link
      div.querySelector('.banner').style.color = banner.style.color
      div.querySelector('.banner').style.backgroundColor = banner.style.backgroundColor
      
      container.append(div)

    });
    
    // Readd slider functionnality
    container.classList.add('carousel')
    initCarousel('.carousel')
    
  })
}
