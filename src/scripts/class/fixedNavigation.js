export default class FixedNavigation {
  constructor({ element, threshold = 0 }) {
    this.element = element;
    this.fixedClassName = 'is-show';
    this.setThreshold(threshold);
    this.watch();
    this.update();
  }

  watch() {
    window.addEventListener('scroll', this.update.bind(this));
  }

  setThreshold(threshold) {
    this.threshold = threshold;
    this.update();
  }

  update() {
    const { scrollY } = window;
    const { threshold } = this;
    if (scrollY >= threshold || threshold === 0) {
      this.element.classList.add(this.fixedClassName);
    } else {
      this.element.classList.remove(this.fixedClassName);
    }
  }
}
