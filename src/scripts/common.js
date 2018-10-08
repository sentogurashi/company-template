function onLoad() {
  const loadingView = document.querySelector('.js-LoadingView');
  loadingView.addEventListener('transitionend', () => {
    loadingView.parentElement.removeChild(loadingView);
  });
  loadingView.classList.add('is-fade');
}

// function main() {
//   setLoadingView();
// }

// window.addEventListener('DOMContentLoaded', main);

window.addEventListener('load', onLoad);
