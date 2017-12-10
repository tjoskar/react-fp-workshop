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

function nextEpisode(episodes = null) {
  return ''
}
