import { throttleWithRAF } from '../util/throttle';
// TODO: 複数エフェクトを同時に
export default class Parallax {
  constructor(setting) {
    if (setting) this.setting(setting);
    return this;
  }

  setting({
    element,
    baseElement = element,
    type = 'move',
    speed = 1,
    direction = 'normal',
    vertical = true,
    horizontal = false,
    effector = null,
    isWindowMode = false,
    maxDistance = window.innerHeight,
    fixedMaxDistance = false,
  }) {
    this.element = element;
    this.baseElement = baseElement;
    this.isWindowMode = isWindowMode;
    this.maxDistance = maxDistance;
    this.fixedMaxDistance = fixedMaxDistance;
    this.effect = {
      // move, scale, blue, custom
      type,
      speed,
      direction,
      vertical,
      horizontal,
      effector,
    };
    return this;
  }

  init() {
    this.adjustSize();
    this.update();
    window.addEventListener('resize', this.adjustSize.bind(this));
    window.addEventListener('orientationchange', this.adjustSize.bind(this));
    window.addEventListener('scroll', throttleWithRAF(this.update.bind(this)));
    return this;
  }

  adjustSize() {
    const domRect = this.element.getBoundingClientRect();
    this.width = domRect.width;
    this.height = domRect.height;
    if (!this.fixedMaxDistance) this.maxDistance = window.innerHeight;
  }

  setEffect(key, value) {
    this.effect[key] = value;
  }

  update() {
    const {
      element, baseElement, effect, isWindowMode, maxDistance,
    } = this;
    const direction = effect.direction === 'reverse' ? -1 : 1;
    const distance = isWindowMode ? window.scrollY : baseElement.getBoundingClientRect().top;

    if (Math.abs(distance) > maxDistance) return;

    switch (effect.type) {
      case 'move': {
        const seed = (distance / 8) * direction;
        const posX = effect.horizontal ? -seed * effect.speed : 0;
        const posY = effect.vertical ? -seed * effect.speed : 0;
        element.style.transform = `translate(${posX}px, ${posY}px)`;
        break;
      }
      case 'opacity': {
        const seed = 1 - distance / maxDistance;
        element.style.opacity = seed;
        break;
      }
      case 'scale': {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const windowHeight = window.innerHeight;
        const absoluteYPos = scrollTop + distance;
        let offset = 0;

        if (absoluteYPos > windowHeight) {
          offset = distance - windowHeight;
        } else {
          offset = distance;
        }

        const seed = offset / 2000;
        element.style.transform = `scale(${1 + (1 - seed - 1) * effect.speed})`;

        break;
      }
      case 'blur': {
        const seed = (distance / 10) * direction;
        element.style.filter = `blur(${1 - seed / 10 - 1}px)`;
        break;
      }
      case 'custom': {
        const seed = (distance / 10) * direction;
        if (effect.effector) effect.effector(element, seed);
        break;
      }

      default:
    }
  }
}
