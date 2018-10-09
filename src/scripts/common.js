import Parallax from './class/parallax';
import FixedNavigation from './class/fixedNavigation';

function setParallax() {
  Array.from(document.querySelectorAll('.js-Parallax')).map(element => new Parallax({
    element: element.querySelector('.js-Parallax__inner'),
    baseElement: element,
    type: 'move',
    direction: 'reverse',
    isWindowMode: true,
    speed: 3.5,
  }).init());
}

function insertContact() {
  Array.from(document.querySelectorAll('.js-contact')).forEach((element) => {
    const convert = str => str
      .replace(/s[0-9]/g, '')
      .split('')
      .reverse()
      .join('');
    const str = 's0t92s7Yus8kGs7s4azFs6mcs81ds32bs105s0WZs8zB0s2bms45Wa';
    element.innerText = window.atob(convert(str));
  });
}

function setFixedNavigation() {
  const targetElement = document.querySelector('.js-headerShowLine');

  if (targetElement) {
    const getTargetPositionY = () => {
      const { scrollY } = window;
      return scrollY + targetElement.getBoundingClientRect().top;
    };

    const fixedNavigation = new FixedNavigation({
      element: document.querySelector('.js-Header'),
      threshold: getTargetPositionY(),
    });

    window.addEventListener('resize', () => {
      fixedNavigation.setThreshold(getTargetPositionY());
      fixedNavigation.update();
    });

    fixedNavigation.update();
  } else {
    const fixedNavigation = new FixedNavigation({
      element: document.querySelector('.js-Header'),
      threshold: 0,
    });
    if (!window.location.hash.match('#')) fixedNavigation.update();
  }
}

function main() {
  setParallax();
  setFixedNavigation();
  insertContact();
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
