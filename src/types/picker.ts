import {I18n, PickerConstructorOptions, EmojiPickerEventMap, EmojiClickEvent, SkinToneChangeEvent} from "./shared";

export default class Picker extends HTMLElement {
  dataSource: string
  locale: string
  i18n: I18n
  skinToneEmoji: string

  /**
   *
   * @param dataSource - URL to fetch the emojibase data from
   * @param locale - Locale string
   * @param i18n - i18n object (see below for details)
   * @param skinToneEmoji - the emoji to use for the skin tone picker
   */
  constructor({
                dataSource = 'https://cdn.jsdelivr.net/npm/emojibase-data@5/en/data.json',
                locale = 'en',
                i18n,
                skinToneEmoji = '🖐️'
              }: PickerConstructorOptions = {}) {
    super()
  }

  // Adding types for addEventListener is hard... I basically just copy-pasted this from lib.dom.d.ts. Not sure
  // Why I need the @ts-ignore
  addEventListener<K extends keyof EmojiPickerEventMap>(type: K, listener: (this: TextTrackCue, ev: EmojiPickerEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void
  // @ts-ignore
  addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void
}

// see https://justinfagnani.com/2019/11/01/how-to-publish-web-components-to-npm/
declare global {
  interface HTMLElementTagNameMap {
    "emoji-picker": Picker,
  }
}