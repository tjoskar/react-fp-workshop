import { create, e } from '../../dom.js';
import { SearchField } from './search-field.js';
import { SearchResults } from './search-result.js';

export function Search() {
  return [
    e(SearchField, { key: 'search-field' }),
    e(SearchResults, { key: 'search-result' })
  ];
}
