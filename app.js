function init() {
  
  const grid = document.querySelector('.grid')
  const cells = []
  const width = 10
  const height = 10
  const gridCellCount = width * height

  function createGrid() {
    for (let i = 0; i < gridCellCount; i++) { // this adds id number to each cell / div
      const cell = document.createElement('div')
      cell.setAttribute('id', i)
      cell.textContent = i
      cells.push(cell)
      grid.appendChild(cell)
    }
    
    console.log('cells', cells)
  }
  createGrid()



  // TV GUIDE BUTTON
  cells[3].classList.add('tv-guide')
  
  document.querySelector('.tv-guide').innerHTML = 'TV Guide'

  const tv = document.querySelector('.tv-guide') 
  tv.addEventListener('click', tvGuide)

  function tvGuide() {
    // console.log('I am being clicked')
    fetch('http://remote/api/tvguide')
      .then(response => response.json())
      .then(data => console.log(data))
  }


  // BOX OFFICE BUTTON
  cells[4].classList.add('box-office')
  
  document.querySelector('.box-office').innerHTML = 'Box Office'

  const box = document.querySelector('.box-office') 
  box.addEventListener('click', boxOffice)

  function boxOffice() {
    // console.log('I am being clicked')
    fetch('http://remote/api/box-office')
      .then(response => response.json())
      .then(data => console.log(data))
  }

  // SERVICES BUTTON
  cells[5].classList.add('services')
  
  document.querySelector('.services').innerHTML = 'Services'

  const services = document.querySelector('.services') 
  services.addEventListener('click', service)

  function service() {
    // console.log('I am being clicked')
    fetch('http://remote/api/services')
      .then(response => response.json())
      .then(data => console.log(data))
  }

  // INTERACTIVE BUTTON
  cells[6].classList.add('interactive')

  document.querySelector('.interactive').innerHTML = 'Interactive'

  const interactive = document.querySelector('.interactive') 
  interactive.addEventListener('click', interActive)

  function interActive() {
    // console.log('I am being clicked')
    fetch('http://remote/api/interactive')
      .then(response => response.json())
      .then(data => console.log(data))
  }





  const webSocket = new WebSocket('wss://remote/api', 'protocolOne')

  webSocket.onopen = function () {
    webSocket.send('Here is some text that the server is urgently awaiting!')
  }
}
window.addEventListener('DOMContentLoaded', init)

