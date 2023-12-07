import { ValidatorString, ValidatorStringArray } from './type'

export const validateString: ValidatorString = (input: string, min: number = 1) => {
  return input.length >= min ? true : false
}

export const validateStringArray: ValidatorStringArray = (input: string[]) => {
  return input.length ? true : false
}
