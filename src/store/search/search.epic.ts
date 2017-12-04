import { Observable } from 'rxjs/Observable'
import { ajax } from 'rxjs/observable/dom/ajax'
import { map, debounceTime, filter, switchMap, retry } from 'rxjs/operators'
import { path } from 'ramda'
import { UPDATE_SEARCH_FIELD, updateSeachResult } from './search.actions'

type UpdateSearchFieldAction = {
  type: string
  value: string
}

export const searchEpic = (action$: Observable<UpdateSearchFieldAction>) =>
  action$.pipe(
    filter(isUpdateSearchFieldAction),
    map(action => action.value),
    filter(isSearchTermLongerThan2),
    debounceTime(1000),
    switchMap(searchForShow),
    map(mapShows),
    map(updateSeachResult),
    retry()
  )

export const emptySearchResultEpic = (action$: Observable<UpdateSearchFieldAction>) =>
  action$.pipe(
    filter(isUpdateSearchFieldAction),
    map(action => action.value),
    filter(value => !isSearchTermLongerThan2(value)),
    map(() => []),
    map(updateSeachResult)
  )

const searchForShow = (seatchTerm: string) =>
  ajax({
    url: `http://api.tvmaze.com/search/shows?q=${seatchTerm}`,
    method: 'GET',
    crossDomain: true
  }).pipe(map(response => response.response))

const isSearchTermLongerThan2 = isSearchTermLongerThan(2)

export function isSearchTermLongerThan(n: number) {
  return (term: string) => term.length > n
}

function isUpdateSearchFieldAction(action: UpdateSearchFieldAction) {
  return action.type === UPDATE_SEARCH_FIELD
}

function mapShows(tvMazeShows) {
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
