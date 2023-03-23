document.getElementById('purple').onclick = partyPurple
document.getElementById('green').onclick = moneyGreen
document.getElementById('blue').onclick = aquaBlue
document.getElementById('yellow').onclick = sunnyYellow

function partyPurple() {
  document.querySelector('body').style.backgroundColor = 'rgba(241,63,247,1)'
  document.querySelector('body').style.color = 'white'
}

function moneyGreen() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,253,81,1)'
  document.querySelector('body').style.color = 'white'
}

function aquaBlue() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,254,255)'
  document.querySelector('body').style.color = 'white'
}

function sunnyYellow() {
  document.querySelector('body').style.backgroundColor = 'yellow'
  document.querySelector('body').style.color = 'white'
}
