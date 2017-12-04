import 'rxjs/add/observable/dom/ajax'
import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/debounceTime'
import { Observable } from 'rxjs/Observable'
import { path } from 'ramda'
import { UPDATE_SEARCH_FIELD, updateSeachResult } from './search.actions'

export const searchEpic = action$ =>
  action$
    .filter(action => action.type === UPDATE_SEARCH_FIELD)
    .map(action => action.value)
    .filter(isSearchTermLongerThan2)
    .debounceTime(1000)
    .switchMap(value =>
      Observable.ajax({
        url: `http://api.tvmaze.com/search/shows?q=${value}`,
        method: 'GET',
        crossDomain: true
      })
    )
    .map(response => response.response)
    .map(mapShows)
    .map(updateSeachResult)

export const emptySearchResultEpic = action$ =>
  action$
    .filter(action => action.type === UPDATE_SEARCH_FIELD)
    .map(action => action.value)
    .filter(value => !isSearchTermLongerThan2(value))
    .map(() => [])
    .map(updateSeachResult)

const isSearchTermLongerThan2 = isSearchTermLongerThan(2)

function isSearchTermLongerThan(n: number) {
  return (term: string) => term.length > n
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
