// @ts-check
import { UPDATE_SEACH_FIELD, updateSeachResult } from './search.actions.js';

export const searchEpic = action$ =>
  action$
    .filter(action => action.type === UPDATE_SEACH_FIELD)
    .map(action => action.value)
    .filter(value => value.length > 2)
    .debounceTime(1000)
    .switchMap(value =>
      window.Rx.Observable.ajax({
        url: `http://api.tvmaze.com/search/shows?q=${value}`,
        method: 'GET',
        crossDomain: true
      })
    )
    .map(response => response.response)
    .map(mapShows)
    .map(updateSeachResult);

function mapShows(tvMazeShows) {
  return tvMazeShows.map(show => mapShow(show.show));
}

function mapShow(tvMazeShow) {
  return {
    id: tvMazeShow.id,
    title: tvMazeShow.name,
    poster: window.R.path(['image', 'medium'], tvMazeShow),
    summary: tvMazeShow.summary
  };
}
