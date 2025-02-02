// Copyright © 2025 Sustains AI, All Rights Reserved
export default function classesToSelector(classes = "") {
  return `.${classes.trim().replace(/([\.:!\/])/g, '\\$1') // eslint-disable-line
    .replace(/ /g, ".")}`;
}
