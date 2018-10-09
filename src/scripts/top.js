import SlideShow from './class/slideShow';
import Parallax from './class/parallax';

function setParallax() {
  const mediaQueryList = window.matchMedia('(max-width: 700px)');
  if (mediaQueryList.matches) return;
  Array.from(document.querySelectorAll('.js-TopParallax')).map(element => new Parallax({
    element: element.querySelector('.js-TopParallax__inner'),
    baseElement: element,
    type: 'move',
    direction: 'reverse',
    isWindowMode: true,
    speed: 3.5,
  }).init());
}

function setSlideShow() {
  const slideShow = new SlideShow({
    rootElement: document.querySelector('.js-TopHero__cover'),
    slideSelector: '.js-TopHero__image',
  });
}

function main() {
  setSlideShow();
  setParallax();
}

window.addEventListener('DOMContentLoaded', main);
