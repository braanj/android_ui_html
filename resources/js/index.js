/**
 * 
 * Global variables
 * 
 */

let appsContainer,
  inputSearch,
  timeNode,
  appTempate


/**
 * 
 * Runs the app with the required DOM nodes
 * 
 */

let init = () => {
  console.log('Android is ready!')

  appsContainer = document.querySelector('.apps-container')
  inputSearch = document.querySelector('input[type=\'search\'')
  appTempate = document.getElementById('app-template')

  inputSearch?.addEventListener('input', () => {
    search()
  })

  skeleton()

  displayApps()

  setInterval(() => {
    time()
  }, 1000)
}


/**
 * 
 * Initialize the app
 * 
 */
window.onload = init