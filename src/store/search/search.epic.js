import { ajax } from 'rxjs/observable/dom/ajax'
import { map, filter, tap } from 'rxjs/operators'
import { path } from 'ramda'
import { UPDATE_SEARCH_FIELD, updateSeachResult } from './search.actions'

export const searchEpic = action$ =>
  action$.pipe(
    filter(isUpdateSearchFieldAction),
    tap(action => console.log(action)),
    // filter out short search strings
    // wait for 500 ms
    // make the ajax request (searchForShow)
    // call `updateSeachResult` with the result from mapShows
    map(() => []),
    map(updateSeachResult)
  )

export const emptySearchResultEpic = action$ =>
  action$.pipe(
    filter(isUpdateSearchFieldAction),
    map(action => action.value),
    filter(value => !isSearchTermLongerThan2(value)),
    map(() => []),
    map(updateSeachResult)
  )

export const searchForShow = seatchTerm =>
  ajax({
    url: `http://api.tvmaze.com/search/shows?q=${seatchTerm}`,
    method: 'GET',
    crossDomain: true
  }).pipe(map(response => response.response))

const isSearchTermLongerThan2 = isSearchTermLongerThan(2)

export function isSearchTermLongerThan(n) {
  return term => term.length > n
}

function isUpdateSearchFieldAction(action) {
  return action.type === UPDATE_SEARCH_FIELD
}

export function mapShows(tvMazeShows) {
  return tvMazeShows.map(show => mapShow(show.show))
}

function mapShow(tvMazeShow) {
  return {
    id: tvMazeShow.id,
    title: tvMazeShow.name,
    poster: path(['image', 'medium'], tvMazeShow),
    summary: tvMazeShow.summary
  }
}
