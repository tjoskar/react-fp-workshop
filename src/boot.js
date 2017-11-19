// @ts-check
import {
  ReactDOM,
  Router,
  Route,
  Link,
  React,
  createStore,
  Provider
} from '../vendors.bundle.js';
import { create, e } from './dom.js';
import { Search } from './components/search/search.js';
import { searchReducer } from './store/search.reducer.js';

const { div, ul, li, h1, h3, p, img, button } = create;

function reducer(state = {}, action) {
  return {
    search: searchReducer(state.search, action)
  };
}

const store = createStore(reducer);

function Hello() {
  return [
    h1({ key: 'headline' }, 'Upcoming shows'),
    e(Shows, { key: 'shows', shows: [1, 2, 3] })
  ];
}

function Shows({ shows }) {
  return shows.map(i =>
    e(Show, {
      show: {
        poster: 'http://static.tvmaze.com/uploads/images/medium_portrait/128/320837.jpg',
        name: 'Dexter',
        summary: 'Something, something'
      },
      unsubscribe: () => console.log('Hej'),
      key: i
    })
  );
}

function Show({ show, unsubscribe }) {
  return div({}, [
    img('.img-rounded', { src: show.poster }),
    div({}, [
      h3({}, show.name),
      p({}, `Next episode:`),
      div({}, show.summary),
      button('.btn .btn-danger', { onClick: unsubscribe }, 'Unsubscribe')
    ])
  ]);
}

function Hello3() {
  return create.div(`Hello 3`);
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
          li(
            '.nav-item',
            {},
            e(Link, { className: 'nav-link', to: '/search' }, 'Search')
          ),
          li('.nav-item', {}, e(Link, { className: 'nav-link', to: '/hello3' }, 'Hello3'))
        ]),
        e(Route, { exact: true, path: '/', component: Hello }),
        e(Route, { path: '/search', component: Search }),
        e(Route, { path: '/hello3', component: Hello3 })
      ])
    )
  );

ReactDOM.render(e(BasicExample), document.getElementById('root'));
