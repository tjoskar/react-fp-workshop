import * as ReactDOM from 'react-dom'
import { div, ul, li, h } from 'react-hyperscript-helpers'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Search } from './components/search/search'
import { UpcomingShows } from './components/shows/upcoming-shows'
import { configureStore } from './store/store'

const store = configureStore()

const App = () =>
  h(Router, [
    h(Provider, { store }, [
      div('.container', [
        ul('.nav .nav-pills', [
          li('.nav-item', [h(Link, { className: 'nav-link', to: '/' }, 'Hello')]),
          li('.nav-item', [h(Link, { className: 'nav-link', to: '/search' }, 'Search')])
        ]),
        h(Route, { exact: true, path: '/', component: UpcomingShows }),
        h(Route, { path: '/search', component: Search })
      ])
    ])
  ])

ReactDOM.render(h(App), document.getElementById('root'))
