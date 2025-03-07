// Copyright © 2025 Sustains AI, All Rights Reserved
import { $, addClass, append, attr, children, closest, css, each, eq, filter, find, hasClass, html, index, is, next, nextAll, off, offset, on, outerHeight, outerWidth, parent, parents, prepend, prev, prevAll, remove, removeAttr, removeClass, styles, text, toggleClass, transform, transition, transitionEnd, trigger } from "dom7";

const Methods = {
  addClass,
  removeClass,
  hasClass,
  toggleClass,
  attr,
  removeAttr,
  transform,
  transition,
  on,
  off,
  trigger,
  transitionEnd,
  outerWidth,
  outerHeight,
  styles,
  offset,
  css,
  each,
  html,
  text,
  is,
  index,
  eq,
  append,
  prepend,
  next,
  nextAll,
  prev,
  prevAll,
  parent,
  parents,
  closest,
  find,
  children,
  filter,
  remove
};
Object.keys(Methods).forEach((methodName) => {
  Object.defineProperty($.fn, methodName, {
    value: Methods[methodName],
    writable: true
  });
});
export default $;
