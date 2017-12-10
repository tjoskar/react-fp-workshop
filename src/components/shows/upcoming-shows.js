import { div, h1, h } from 'react-hyperscript-helpers'
import { Shows } from './shows'

export function UpcomingShows() {
  return div([h1('Upcoming shows'), h(Shows)])
}
