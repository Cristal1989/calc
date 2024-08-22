const calcPlace = document.querySelector('.calc__place');
const helloBtn = document.querySelector('.btn.hellobtn');

helloBtn.addEventListener('click', () => {
  helloBtn.classList.toggle('is-onwork');
  helloStyle();
});

function helloStyle() {
  if (helloBtn.classList.contains('is-onwork')) {
    helloBtn.style.position = 'absolute';
    helloBtn.style.right = '1450px';
    helloBtn.style.top = '50px';
    helloBtn.style.width = '30px';
    helloBtn.style.height = '30px';
    helloBtn.textContent = 'X';
    calcPlace.style.display = 'grid';
  } else {
    calcPlace.style.display = 'none';
    helloBtn.textContent = `Hello! I'm calc! Push me for start!`;
    helloBtn.style.width = '300px';
    helloBtn.style.height = '70px';
    helloBtn.style.position = 'static';
  }
}
