import TYPE from './types'

export const searchItemBook = name => ({
  type: TYPE.SEARCH.BOOK,
  payload: { name }
})