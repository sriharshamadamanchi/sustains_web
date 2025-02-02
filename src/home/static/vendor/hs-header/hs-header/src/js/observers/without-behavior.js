// Copyright © 2025 Sustains AI, All Rights Reserved
import HSAbstractObserver from "./abstract";

export default class HSHeaderWithoutBehaviorObserver extends HSAbstractObserver {
  constructor(element) {
    super(element);
  }

  init() {
    return this;
  }

  check() {
    return this;
  }

  destroy() {
    return this;
  }

  changeState() {
    return this;
  }

  toDefaultState() {
    return this;
  }
}
