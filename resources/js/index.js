/**
 * 
 * Global variables
 * 
 */

let apps = [
  {
    'name': 'Play Store',
    'icon': './resources/img/icon.svg',
    'link': '#'
  },
  {
    'name': 'Camera',
    'icon': './resources/img/icon.svg',
    'link': '#'
  },
  {
    'name': 'Chrome',
    'icon': './resources/img/icon.svg',
    'link': '#'
  },
  {
    'name': 'Calendar',
    'icon': './resources/img/icon.svg',
    'link': '#'
  },
  {
    'name': 'Clock',
    'icon': './resources/img/icon.svg',
    'link': '#'
  },
],
  appsContainer,
  inputSearch


/**
 * 
 * Runs the app with the required DOM nodes
 * 
 */

let init = () => {
  console.log('Android is ready!')

  appsContainer = document.querySelector('.apps-container')
  inputSearch = document.querySelector('input[type=\'search\'')
  
  inputSearch.addEventListener('input', () => {
    search()
  })

  displayApps(apps)
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
  console.log(key)
  // Removed all apps
  resetAppsContainer()

  displayApps(apps.filter(({ name }) => name.includes(key)))
}


let getKey = () => {
  return inputSearch.value
}


/**
 * 
 * Initialize the app
 * 
 */
window.onload = init