/**
 * 
 * Displays a skeleton of the page while waiting for data loading
 * 
 */
let skeleton = (container, template, items = 12) => {
  for (let i = 0; i < items; i++) {
    container.append(template.content.cloneNode(true))
  }
}


/**
 * 
 * Display time in HH:MM format
 * 
 */
let time = () => {
  let time = new Date()
  timeNode.innerHTML = formatTime(time.getHours()) + ':' + formatTime(time.getMinutes())
}

let formatTime = (time) => {
  return time > 9 ? time : '0' + time
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

let createNode = (div, app) => {

  div.getElementById('app-icon').src = app.icon
  div.getElementById('app-icon').classList.remove('skeleton', 'skeleton-img')
  div.getElementById('app-link').href = app.link
  div.getElementById('app-name').classList.remove('skeleton', 'skeleton-img')
  div.getElementById('app-name').textContent = app.name

  return div
}


/**
 * 
 * Get data from Json file
 * Displays apps
 * Uses createNode function to create the app nodes
 * 
 */

let displayApps = (searchKey = '') => {

  fetch('./data/data.json')
    .then((response) => response.json())
    .then((apps) => {

      resetContainer(appsContainer)

      apps.forEach((app, index) => {

        // Filter apps by name
        if (!app.name.toLowerCase().includes(searchKey)) {
          return;
        }

        const div = appTempate.content.cloneNode(true)

        setTimeout(() => {
          appsContainer.append(createNode(div, app))
        }, 20 * index)

      });
    })
}


/**
 * 
 * Remove all the apps from screen
 * 
 */

let resetContainer = (container) => {
  container.innerHTML = ''
}


/**
 * 
 * Search for apps by name
 * 
 */
let search = () => {
  let searchKey = getSearchKey().toLowerCase()

  if (searchKey) {

    resetContainer(appsContainer)
    displayApps(searchKey)

    return
  }

  // In case the search input is empty
  // Display all apps again
  displayApps()

}


/**
 * 
 * Get input from the user
 * 
 * @returns  input value
 */
let getSearchKey = () => {
  return inputSearch.value
}
