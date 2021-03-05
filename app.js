function init() {
  
  const grid = document.querySelector('.grid')
  const cells = []
  const width = 10
  const height = 6
  const gridCellCount = width * height

  function createGrid() {
    for (let i = 0; i < gridCellCount; i++) { 
      // this adds id number to each cell / div
      const cell = document.createElement('div')
      cell.setAttribute('id', i)
      // cell.textContent = i
      cells.push(cell)
      grid.appendChild(cell)
    }
    
    console.log('cells', cells)
  }
  createGrid()



  // TV GUIDE BUTTON
  cells[1].classList.add('tv-guide', 'tabs-btn')
  
  document.querySelector('.tv-guide').innerHTML = 'TV Guide'

  const tv = document.querySelector('.tv-guide') 
  tv.addEventListener('click', tvGuide)

  function tvGuide() {
    console.log('Tv Guide being clicked')
    // fetch('http://remote/api/tvguide')
    //   .then(response => response.json())
    //   .then(data => console.log(data))
  }


  // BOX OFFICE BUTTON
  cells[2].classList.add('box-office', 'tabs-btn')
  
  document.querySelector('.box-office').innerHTML = 'Box Office'

  const box = document.querySelector('.box-office') 
  box.addEventListener('click', boxOffice)

  function boxOffice() {
    console.log('Box office being clicked')
    // fetch('http://remote/api/box-office')
    //   .then(response => response.json())
    //   .then(data => console.log(data))
  }

  // SERVICES BUTTON
  cells[3].classList.add('services', 'tabs-btn')
  
  document.querySelector('.services').innerHTML = 'Services'

  const services = document.querySelector('.services') 
  services.addEventListener('click', service)

  function service() {
    console.log('Services being clicked')
    // fetch('http://remote/api/services')
    //   .then(response => response.json())
    //   .then(data => console.log(data))
  }

  // INTERACTIVE BUTTON
  cells[4].classList.add('interactive', 'tabs-btn')

  document.querySelector('.interactive').innerHTML = 'Interactive'

  const interactive = document.querySelector('.interactive') 
  interactive.addEventListener('click', interActive)

  function interActive() {
    console.log('Interactive being clicked')
    // fetch('http://remote/api/interactive')
    //   .then(response => response.json())
    //   .then(data => console.log(data))
  }


  // LEFT ARROW
  cells[18].classList.add('leftarrow', 'tabs-btn')

  const leftarrow = document.querySelector('.leftarrow')
  leftarrow.innerHTML = '<i class="fa fa-arrow-left fa-2x">'

  leftarrow.addEventListener('click', leftArrow)
  function leftArrow() {
    console.log('Left Arrow being clicked')
  }

  // RIGHT ARROW
  cells[20].classList.add('rightarrow', 'tabs-btn')

  const rightarrow = document.querySelector('.rightarrow')
  rightarrow.innerHTML = '<i class="fa fa-arrow-right fa-2x">'

  rightarrow.addEventListener('click', rightArrow)
  function rightArrow() {
    console.log('Right Arrow being clicked')
  }

  // UP ARROW
  cells[13].classList.add('uparrow', 'tabs-btn')

  const uparrow = document.querySelector('.uparrow')
  uparrow.innerHTML = '<i class="fa fa-arrow-up fa-2x">'

  uparrow.addEventListener('click', upArrow)
  function upArrow() {
    console.log('Up Arrow being clicked')
  }

  // DOWN ARROW
  cells[25].classList.add('downarrow', 'tabs-btn')

  const downarrow = document.querySelector('.downarrow')
  downarrow.innerHTML = '<i class="fa fa-arrow-down fa-2x">'

  downarrow.addEventListener('click', downArrow)
  function downArrow() {
    console.log('Down Arrow being clicked')
  }

  // OK BUTTON
  cells[19].classList.add('ok', 'tabs-btn')

  const ok = document.querySelector('.ok')
  ok.innerHTML = 'OK'

  ok.addEventListener('click', okFunction)
  function okFunction() {
    console.log('OK being clicked')
  }
  
  // RED BUTTON
  cells[55].classList.add('red', 'tabs-btn')

  const red = document.querySelector('.red')
  red.innerHTML = '<i class="fa fa-circle fa-2x">'

  red.addEventListener('click', redFunction)
  function redFunction() {
    console.log('Red being clicked')
  }
  // GREEN BUTTON
  cells[56].classList.add('green', 'tabs-btn')

  const green = document.querySelector('.green')
  green.innerHTML = '<i class="fa fa-circle fa-2x">'

  green.addEventListener('click', greenFunction)
  function greenFunction() {
    console.log('Green being clicked')
  }
  // YELLOW BUTTON
  cells[57].classList.add('yellow', 'tabs-btn')

  const yellow = document.querySelector('.yellow')
  yellow.innerHTML = '<i class="fa fa-circle fa-2x">'

  yellow.addEventListener('click', yellowFunction)
  function yellowFunction() {
    console.log('Yellow being clicked')
  }
  // BLUE BUTTON
  cells[58].classList.add('blue', 'tabs-btn')

  const blue = document.querySelector('.blue')
  blue.innerHTML = '<i class="fa fa-circle fa-2x">'

  blue.addEventListener('click', blueFunction)
  function blueFunction() {
    console.log('Blue being clicked')
  }
  // 1 BUTTON
  cells[9].classList.add('one', 'tabs-btn')

  const one = document.querySelector('.one')
  one.innerHTML = '1'

  one.addEventListener('click', oneFunction)
  function oneFunction() {
    console.log('1 being clicked')
  }
  // 2 BUTTON
  cells[10].classList.add('two', 'tabs-btn')

  const two = document.querySelector('.two')
  two.innerHTML = '2'

  two.addEventListener('click', twoFunction)
  function twoFunction() {
    console.log('2 being clicked')
  }
  // 3 BUTTON
  cells[11].classList.add('three', 'tabs-btn')

  const three = document.querySelector('.three')
  three.innerHTML = '3'

  three.addEventListener('click', threeFunction)
  function threeFunction() {
    console.log('3 being clicked')
  }
  // 4 BUTTON
  cells[15].classList.add('four', 'tabs-btn')

  const four = document.querySelector('.four')
  four.innerHTML = '4'

  four.addEventListener('click', fourFunction)
  function fourFunction() {
    console.log('4 being clicked')
  }
  // 5 BUTTON
  cells[16].classList.add('five', 'tabs-btn')

  const five = document.querySelector('.five')
  five.innerHTML = '5'

  five.addEventListener('click', fiveFunction)
  function fiveFunction() {
    console.log('5 being clicked')
  }
  // // 6 BUTTON
  cells[17].classList.add('six', 'tabs-btn')

  const six = document.querySelector('.six')
  six.innerHTML = '6'

  six.addEventListener('click', sixFunction)
  function sixFunction() {
    console.log('6 being clicked')
  }
  // // 7 BUTTON
  cells[21].classList.add('seven', 'tabs-btn')

  const seven = document.querySelector('.seven')
  seven.innerHTML = '7'

  seven.addEventListener('click', sevenFunction)
  function sevenFunction() {
    console.log('7 being clicked')
  }
  // 8 BUTTON
  cells[22].classList.add('eight', 'tabs-btn')

  const eight = document.querySelector('.eight')
  eight.innerHTML = '8'

  eight.addEventListener('click', eightFunction)
  function eightFunction() {
    console.log('8 being clicked')
  }
  // 9 BUTTON
  cells[23].classList.add('nine', 'tabs-btn')

  const nine = document.querySelector('.nine')
  nine.innerHTML = '9'

  nine.addEventListener('click', nineFunction)
  function nineFunction() {
    console.log('9 being clicked')
  }
  // 0 BUTTON
  cells[28].classList.add('zero', 'tabs-btn')

  const zero = document.querySelector('.zero')
  zero.innerHTML = '0'

  zero.addEventListener('click', zeroFunction)
  function zeroFunction() {
    console.log('0 being clicked')
  }

  // REWIND BUTTON
  cells[37].classList.add('rewind', 'tabs-btn')

  const rewind = document.querySelector('.rewind')
  rewind.innerHTML = '<i class="fa fa-backward fa-2x">'

  rewind.addEventListener('click', rewindFunction)
  function rewindFunction() {
    console.log('rewind being clicked')
  }

  // STOP BUTTON
  cells[38].classList.add('stop', 'tabs-btn')

  const stop = document.querySelector('.stop')
  stop.innerHTML = '<i class="fa fa-stop fa-2x">'

  stop.addEventListener('click', stopFunction)
  function stopFunction() {
    console.log('stop being clicked')
  }

  // PAUSE BUTTON
  cells[39].classList.add('pause', 'tabs-btn')

  const pause = document.querySelector('.pause')
  pause.innerHTML = '<i class="fa fa-pause fa-2x">'

  pause.addEventListener('click', pauseFunction)
  function pauseFunction() {
    console.log('pause being clicked')
  }
  // PLAY BUTTON
  cells[40].classList.add('play', 'tabs-btn')

  const play = document.querySelector('.play')
  play.innerHTML = '<i class="fa fa-play fa-2x">'

  play.addEventListener('click', playFunction)
  function playFunction() {
    console.log('play being clicked')
  }
  // FORWARD BUTTON
  cells[41].classList.add('forward', 'tabs-btn')

  const forward = document.querySelector('.forward')
  forward.innerHTML = '<i class="fa fa-forward fa-2x">'

  forward.addEventListener('click', forwardFunction)
  function forwardFunction() {
    console.log('forward being clicked')
  }
  // CHEVRON UP BUTTON
  cells[50].classList.add('chevron-up', 'tabs-btn')

  const chevronup = document.querySelector('.chevron-up')
  chevronup.innerHTML = '<i class="fa fa-chevron-up fa-3x">'

  chevronup.addEventListener('click', chevronupFunction)
  function chevronupFunction() {
    console.log('chevron-up being clicked')
  }
  // CHEVRON DOWN BUTTON
  cells[51].classList.add('chevron-down', 'tabs-btn')

  const chevrondown = document.querySelector('.chevron-down')
  chevrondown.innerHTML = '<i class="fa fa-chevron-down fa-3x">'

  chevrondown.addEventListener('click', chevrondownFunction)
  function chevrondownFunction() {
    console.log('chevron-down being clicked')
  }



}
window.addEventListener('DOMContentLoaded', init)

