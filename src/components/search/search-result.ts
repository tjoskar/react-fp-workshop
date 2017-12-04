import { figure, img, figcaption, h, h3, div } from 'react-hyperscript-helpers'
import { branch, renderComponent, pure } from 'recompose'
import { compose } from 'ramda'
import { connect } from 'react-redux'
import { subscribeToShow } from '../../store/shows/show.actions'
import { ShowLoadingTextIfLoading } from './loading'

function SearchResultsView({ results, subscribe }) {
  return div(
    results.map(result =>
      h(SearchResult, { result, key: result.id, onClick: subscribe(result) })
    )
  )
}

function SearchResult({ result, onClick }) {
  return figure('.figure', { onClick }, [
    img('.figure-img .img-fluid .img-rounded', { src: result.poster, key: 'poster' }),
    figcaption('.figure-caption', result.title)
  ])
}

function NoResult() {
  return h3('No result')
}

const emptySearchResult = props => !Boolean(props.results && props.results.length > 0)

const mapDispatchToProps = dispatch => ({
  subscribe: show => e => dispatch(subscribeToShow(show))
})

const mapStateToProps = state => ({
  results: state.search.searchResult.filter(
    show => !state.shows.shows.find(s => s.id === show.id)
  ),
  loading: state.search.loading
})

export const SearchResults = compose(
  connect(mapStateToProps, mapDispatchToProps),
  pure,
  ShowLoadingTextIfLoading,
  branch(emptySearchResult, renderComponent(NoResult))
)(SearchResultsView)
