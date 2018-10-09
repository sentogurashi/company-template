export default class FixedNavigation {
  constructor({ element, threshold = 0 }) {
    this.element = element;
    this.fixedClassName = 'is-show';
    this.setThreshold(threshold);
    this.watch();
  }

  watch() {
    setTimeout(() => {
      window.addEventListener('scroll', this.update.bind(this));
    }, 1000);
  }

  setThreshold(threshold) {
    this.threshold = threshold;
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
