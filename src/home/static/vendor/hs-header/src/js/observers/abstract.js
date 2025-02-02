// Copyright © 2025 Sustains AI, All Rights Reserved
export default class HSAbstractObserver {
  constructor(element) {
    this.element = element;
    this.defaultState = true;
  }

  reinit() {
    this.destroy().init().check();
  }
}
