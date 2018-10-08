import Parallax from './class/parallax';

function main() {
  Array.from(document.querySelectorAll('.js-Parallax')).map(element => new Parallax({
    element: element.querySelector('.js-Parallax__inner'),
    baseElement: element,
    type: 'move',
    direction: 'reverse',
    isWindowMode: true,
    speed: 3.5,
  }).init());
}

function onLoad() {
  const loadingView = document.querySelector('.js-LoadingView');
  loadingView.addEventListener('transitionend', () => {
    loadingView.parentElement.removeChild(loadingView);
  });
  loadingView.classList.add('is-fade');
}

window.addEventListener('DOMContentLoaded', main);

window.addEventListener('load', onLoad);
