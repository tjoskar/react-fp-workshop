// @ts-check
// @ts-ignore
import { ReactDOM, Router, Route, Link } from '../vendors.bundle.js';
import { create, e } from './dom.js';

const { div, ul, li, h1, p } = create;

function Hello() {
  return [
    h1({ key: 'headline' }, 'Upcoming shows'),
    e(Shows, { key: 'shows', shows: [1, 2, 3] })
  ];
}

function Shows({ shows }) {
  return shows.map(i => p({ key: i }, `i: ${i}`));
}

function Hello2() {
  return create.div(`Hello 2`);
}

function Hello3() {
  return create.div(`Hello 3`);
}

const BasicExample = () =>
  e(
    Router,
    undefined,
    div('.container', {}, [
      ul('.nav .nav-pills', {}, [
        li('.nav-item', {}, e(Link, { className: 'nav-link', to: '/' }, 'Hello')),
        li('.nav-item', {}, e(Link, { className: 'nav-link', to: '/hello2' }, 'Hello2')),
        li('.nav-item', {}, e(Link, { className: 'nav-link', to: '/hello3' }, 'Hello3'))
      ]),
      e(Route, { exact: true, path: '/', component: Hello }),
      e(Route, { path: '/hello2', component: Hello2 }),
      e(Route, { path: '/hello3', component: Hello3 })
    ])
  );

ReactDOM.render(
  e(BasicExample, { toWhat: 'World' }, null),
  document.getElementById('root')
);
