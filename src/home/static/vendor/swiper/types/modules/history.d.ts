// Copyright © 2025 Sustains AI, All Rights Reserved
export interface HistoryMethods {}

export interface HistoryEvents {}

export interface HistoryOptions {

  /**
   * Enables History Plugin.
   *
   * @default false
   */
  enabled?: boolean;

  /**
   * Swiper page root, useful to specify when you use Swiper history mode not on root website page.
   * For example can be `https://my-website.com/` or `https://my-website.com/subpage/` or `/subpage/`
   *
   *
   * @default ''
   */
  root?: string;

  /**
   * Works in addition to hashnav or history to replace current url state with the
   * new one instead of adding it to history
   *
   * @default false
   */
  replaceState?: boolean;

  /**
   * Url key for slides
   *
   * @default 'slides'
   */
  key?: string;

  /**
   * Keep query parameters when changing browser url.
   *
   * @default false
   */
  keepQuery?: boolean;
}
