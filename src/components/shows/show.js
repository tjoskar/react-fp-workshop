// @ts-check
import { create } from '../../dom.js';
const { div, ul, li, h1, h3, p, img, button } = create;

export function Show({ show, onClick }) {
  return div({}, [
    img('.img-rounded', { src: show.poster }),
    div({}, [
      h3({}, show.name),
      p({}, `Next episode:`),
      div({ dangerouslySetInnerHTML: { __html: show.summary } }),
      button('.btn .btn-danger', { onClick }, 'Unsubscribe')
    ])
  ]);
}
