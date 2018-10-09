export default class SlideShow {
  constructor({ rootElement, slideSelector }) {
    this.rootElement = rootElement;
    this.slideSelector = slideSelector;
    this.slideElements = this.getSlideElements();
    this.length = this.slideElements.length;
    this.run(this.slideElements[this.length - 1]);
  }

  getSlideElements() {
    return Array.from(this.rootElement.querySelectorAll(this.slideSelector));
  }

  next(element) {
    const nextElement = this.slideElements[this.length - 2];
    this.run(nextElement);

    window.setTimeout(() => {
      element.classList.remove('is-animate');
      this.rootElement.insertBefore(element, this.slideElements[0]);
      this.slideElements = this.getSlideElements();
    }, 1000);
  }

  run(element) {
    element.classList.add('is-animate');
    window.setTimeout(() => {
      this.next(element);
    }, 5000);
  }
}
