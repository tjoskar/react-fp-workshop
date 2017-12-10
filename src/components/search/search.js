import { h } from 'react-hyperscript-helpers'
import { SearchField } from './search-field'
import { SearchResults } from './search-result'

export function Search() {
  return [
    h(SearchField, { key: 'search-field' }),
    h(SearchResults, { key: 'search-result' })
  ]
}
