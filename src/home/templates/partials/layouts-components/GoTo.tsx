// Copyright © 2025 Sustains AI, All Rights Reserved
export const GoTo = () => (
  <a
    className = "js-go-to go-to position-fixed"
    href = "javascript:;"
    style = {{ visibility: "hidden" }}
    data-hs-go-to-options = '{"offsetTop": 700,"position": {"init": {"right": "2rem"},"show": {"bottom": "2rem"},"hide": {"bottom": "-2rem"}}}'
  >
    <i className = "bi-chevron-up" />
  </a>
)
