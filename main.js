var $car = document.querySelector('img');

window.addEventListener('keydown', handleKeyDown);

function handleKeyDown(event) {
  if (event.key === 'ArrowRight') {
    $car.className = 'right';
  } else if (event.key === 'ArrowDown') {
    $car.className = 'down';
  } else if (event.key === 'ArrowLeft') {
    $car.className = 'left';
  } else if (event.key === 'ArrowUp') {
    $car.className = 'up';
  }
}
