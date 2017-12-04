import { Maybe } from 'monet'
import { div, img, h3, p, button } from 'react-hyperscript-helpers'

export function Show({ show, onClick }) {
  return div([
    img('.img-rounded', { src: show.poster }),
    div([
      h3(show.name),
      p(`Next episode: ${nextEpisode(show.episodes)}`),
      div({ dangerouslySetInnerHTML: { __html: show.summary } }),
      button('.btn .btn-danger', { onClick }, 'Unsubscribe')
    ])
  ])
}

type Episode = {
  id: number
  title: string
  episode: number
  season: number
  airdate: string
}

function sortEpisodesInDateOrder(a: Episode, b: Episode) {
  return new Date(a.airdate).getTime() - new Date(b.airdate).getTime()
}

function didEpisodeAirAfter(time: Date) {
  return (episode: Episode) => new Date(episode.airdate).getTime() > time.getTime()
}

function findNextEpisode(toDay: Date) {
  return (episodes: Episode[]) => episodes.find(didEpisodeAirAfter(toDay))
}

const findNextAirdEpisode = findNextEpisode(new Date())

function nextEpisode(episodes: Episode[] = null) {
  return Maybe.fromNull(episodes)
    .map(eps => eps.sort(sortEpisodesInDateOrder))
    .chain(eps => Maybe.fromNull(findNextAirdEpisode(eps)))
    .map(episode => `${episode.title} - ${episode.airdate}`)
    .orSome('Do not know :/')
}
