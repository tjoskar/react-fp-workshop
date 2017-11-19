// @ts-check
import { create, e } from '../../dom.js';
import { connect } from '../../../vendors.bundle.js';
import { subscribeToShow } from '../../store/shows/show.actions.js';

const { figure, img, figcaption } = create;

export function SearchResultsView({ results, subscribe }) {
  return results.map(result =>
    e(SearchResult, { result, key: result.id, onClick: subscribe(result) })
  );
}

export function SearchResult({ result, onClick }) {
  return figure('.figure', { onClick }, [
    img('.figure-img .img-fluid .img-rounded', { src: result.poster, key: 'poster' }),
    figcaption('.figure-caption', {}, result.title)
  ]);
}

const mapDispatchToProps = dispatch => ({
  subscribe: show => e => dispatch(subscribeToShow(show))
});

const mapStateToProps = state => ({
  results: state.search.searchResult.filter(
    show => !state.shows.shows.find(s => s.id === show.id)
  )
});

export const SearchResults = connect(mapStateToProps, mapDispatchToProps)(
  SearchResultsView
);
