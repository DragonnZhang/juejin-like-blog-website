import type { ValidatorString, ValidatorStringArray } from '~/types/validator'

export const validateString: ValidatorString = (input: string, min: number = 1) => {
  return input.length >= min ? true : false
}

export const validateStringArray: ValidatorStringArray = (input: string[]) => {
  return input.length ? true : false
}

export const singleStyle = () => {
  let style: undefined | HTMLStyleElement
  return function () {
    if (!style) {
      style = document.createElement('style')
      document.head.appendChild(style)
    }
    return style
  }
}
