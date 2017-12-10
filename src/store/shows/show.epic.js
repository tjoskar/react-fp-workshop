import { ajax } from 'rxjs/observable/dom/ajax'
import { map, filter, switchMap } from 'rxjs/operators'
import { SUBSCRIBE_TO_SHOW, updateEpisodes } from './show.actions'

export const updateEpisodesEpic = action$ =>
  action$.pipe(
    filter(action => action.type === SUBSCRIBE_TO_SHOW),
    map(action => action.show),
    switchMap(show =>
      getEpisodes$(show.id).pipe(map(mapEpisodes), map(updateEpisodes(show.id)))
    )
  )

const getEpisodes$ = showId =>
  ajax({
    url: `http://api.tvmaze.com/shows/${showId}?embed=episodes`,
    method: 'GET',
    crossDomain: true
  }).pipe(map(results => results.response._embedded.episodes))

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
