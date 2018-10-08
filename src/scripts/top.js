import FixedNavigation from './class/fixedNavigation';

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
}

window.addEventListener('DOMContentLoaded', main);
