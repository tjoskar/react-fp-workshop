// @ts-check
import { create, e } from '../../dom.js';
import { connect } from '../../../vendors.bundle.js';

const { figure, img, figcaption } = create;

export function SearchResultsView({ results, subscribe }) {
  return results.map(result => e(SearchResult, { result, onClick: subscribe(result) }));
}

export function SearchResult({ result, onClick }) {
  return figure('.figure', { onClick }, [
    img('.figure-img .img-fluid .img-rounded', { src: result.poster, key: 'poster' }),
    figcaption('.figure-caption', {}, result.name)
  ]);
}

const mapDispatchToProps = dispatch => ({
  subscribe: id => e => dispatch(subscribeToShow(id))
});

const mapStateToProps = state => ({
  results: state.search.searchResult
});

export const SearchResults = connect(mapStateToProps, mapDispatchToProps)(
  SearchResultsView
);
