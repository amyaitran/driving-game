/* global data */
/* exported data */

var $car = document.querySelector('img');

window.addEventListener('keydown', handleKeyDown);

function handleKeyDown(event) {
  if (event.key === 'ArrowRight') {
    $car.className = 'right';
    data.direction = 'right';
  } else if (event.key === 'ArrowDown') {
    $car.className = 'down';
    data.direction = 'down';
  } else if (event.key === 'ArrowLeft') {
    $car.className = 'left';
    data.direction = 'left';
  } else if (event.key === 'ArrowUp') {
    $car.className = 'up';
    data.direction = 'up';
  } else if (event.key === ' ') {
    moveCarForward();
  }
}

function moveCarForward() {
  setInterval(function () {
    $car.style.left = data.location.x + 3 + 'px';
    data.location.x += 3;
  }, 16);
}
