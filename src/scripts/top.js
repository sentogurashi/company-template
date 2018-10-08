import FixedNavigation from './class/fixedNavigation';
import SlideShow from './class/slideShow';

function setSlideShow() {
  const slideShow = new SlideShow({
    rootElement: document.querySelector('.js-TopHero__cover'),
    slideSelector: '.js-TopHero__image',
  });
}

function setFixedNavigation() {
  const targetElement = document.querySelector('.js-headerShowLine');
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
  });
}

function main() {
  setFixedNavigation();
  setSlideShow();
}

window.addEventListener('DOMContentLoaded', main);
