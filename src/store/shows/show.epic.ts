import 'rxjs/add/observable/dom/ajax'
import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/switchMap'
import { Observable } from 'rxjs/Observable'
import { SUBSCRIBE_TO_SHOW, updateEpisodes } from './show.actions'

export const updateEpisodesEpic = action$ =>
  action$
    .filter(action => action.type === SUBSCRIBE_TO_SHOW)
    .map(action => action.show)
    .switchMap(show =>
      Observable.ajax({
        url: `http://api.tvmaze.com/shows/${show.id}?embed=episodes`,
        method: 'GET',
        crossDomain: true
      })
        .map(results => results.response._embedded.episodes)
        .map(mapEpisodes)
        .map(episodes => updateEpisodes(show.id, episodes))
    )

function mapEpisodes(tvMazeEpisodes) {
  return tvMazeEpisodes.map(mapEpisode)
}

function mapEpisode(tvMazeEpisode) {
  return {
    id: tvMazeEpisode.id,
    title: tvMazeEpisode.name,
    episode: tvMazeEpisode.number,
    season: tvMazeEpisode.season,
    airdate: tvMazeEpisode.airdate
  }
}
