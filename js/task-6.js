
function getRandomHexColor() {
return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

  const input = document.querySelector('input');
  const createBtn = document.querySelector('[data-create]');
  const destroyBtn = document.querySelector('[data-destroy]');
  const boxesContainer = document.querySelector('#boxes');

  createBtn.addEventListener('click', () => {
    const amount = Number(input.value);
    if (amount < 1 || amount > 100 || isNaN(amount)) {
      return;
    }
    createBoxes(amount);
    input.value = '';
  });

  destroyBtn.addEventListener('click', () => {
    destroyBoxes();
  });

  function createBoxes(amount) {
    let size = 30;
    boxesContainer.innerHTML = '';
    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxesContainer.appendChild(box);
      size += 10;
    }
  }

  function destroyBoxes() {
    boxesContainer.innerHTML = '';
  }