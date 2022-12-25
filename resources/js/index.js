/**
 * 
 * Global variables
 * 
 */

let apps = [
  {
    'name': 'Play Store',
    'icon': './resources/img/app/google-play.png',
    'link': '#'
  },
  {
    'name': 'Camera',
    'icon': './resources/img/app/photo.png',
    'link': '#'
  },
  {
    'name': 'Chrome',
    'icon': './resources/img/app/chrome.png',
    'link': '#'
  },
  {
    'name': 'Calendar',
    'icon': './resources/img/app/calendar.png',
    'link': '#'
  },
  {
    'name': 'Clock',
    'icon': './resources/img/icon.svg',
    'link': '#'
  },
],
  appsContainer,
  inputSearch,
  timeNode


/**
 * 
 * Runs the app with the required DOM nodes
 * 
 */

let init = () => {
  console.log('Android is ready!')

  appsContainer = document.querySelector('.apps-container')
  inputSearch   = document.querySelector('input[type=\'search\'')
  timeNode      = document.querySelector('#time')
  
  inputSearch.addEventListener('input', () => {
    search()
  })

  displayApps(apps)

  setInterval(() => {
    time()
  }, 1000)
}


let time = () => {
  let time = new Date()

  timeNode.innerHTML = time.toLocaleTimeString()
}


/**
 * 
 * App template composed of App Name & Icon
 * 
 * @param App object
 * 
 * @returns app tamplate
 * 
 */

let appTamplate = ({ name, icon }) => {
  return `
    <img src="` + icon + `" class="app-icon" alt="">
    <h3 class="app-name">` + name + `</h3>
  `
}


/**
 * 
 * Creates a html node with app information
 * 
 * @param {* Html tag type (e.g: 'a' for <a> tag ) } type 
 * @param {* Css classes for style } classes 
 * @param {* App object } app 
 * @returns 
 */

let createNode = (type, classes, app) => {
  let node = document.createElement(type)

  node.classList = classes
  
  // Add href only when the tag type is an <a> tag
  if (type === 'a') {
    node.href = app.link
  }

  node.innerHTML = appTamplate(app)

  return node
}


/**
 * 
 * Displays apps &
 * Uses createNode function to create the app nodes
 * 
 */

let displayApps = (apps) => {
  apps.forEach((app, index) => {

    let node = createNode('a', 'app', app)

    setTimeout(() => {
      appsContainer.append(node)
    }, 10 * index)

  })
}


/**
 * 
 * Remove all the apps from screen
 * 
 */

let resetAppsContainer = () => {
  appsContainer.innerHTML = ''
}


/**
 * 
 * Search for apps by name
 * 
 */
let search = () => {
  let key = getKey()
  
  // Removed all apps
  resetAppsContainer()

  displayApps(apps.filter(({ name }) => name.toLowerCase().includes(key)))
}


/**
 * 
 * 
 * 
 * @returns 
 */
let getKey = () => {
  return inputSearch.value
}


/**
 * 
 * Initialize the app
 * 
 */
window.onload = init