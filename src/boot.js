// @ts-check
import { ReactDOM, Router, Route, Link, Provider } from '../vendors.bundle.js';
import { create, e } from './dom.js';
import { Search } from './components/search/search.js';
import { Shows } from './components/shows/shows.js';
import { configureStore } from './store/store.js';

const { div, ul, li, h1, h3, p, img, button } = create;

const store = configureStore();

function Hello() {
  return div({}, [h1({}, 'Upcoming shows'), e(Shows)]);
}

const BasicExample = () =>
  e(
    Router,
    undefined,
    e(
      Provider,
      { store },
      div('.container', {}, [
        ul('.nav .nav-pills', {}, [
          li('.nav-item', {}, e(Link, { className: 'nav-link', to: '/' }, 'Hello')),
          li('.nav-item', {}, e(Link, { className: 'nav-link', to: '/search' }, 'Search'))
        ]),
        e(Route, { exact: true, path: '/', component: Hello }),
        e(Route, { path: '/search', component: Search })
      ])
    )
  );

ReactDOM.render(e(BasicExample), document.getElementById('root'));
