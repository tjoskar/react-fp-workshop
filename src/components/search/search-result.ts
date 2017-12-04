import { figure, img, figcaption, h } from 'react-hyperscript-helpers'
import { connect } from 'react-redux'
import { subscribeToShow } from '../../store/shows/show.actions'

function SearchResultsView({ results, subscribe }) {
  return results.map(result =>
    h(SearchResult, { result, key: result.id, onClick: subscribe(result) })
  )
}

function SearchResult({ result, onClick }) {
  return figure('.figure', { onClick }, [
    img('.figure-img .img-fluid .img-rounded', { src: result.poster, key: 'poster' }),
    figcaption('.figure-caption', result.title)
  ])
}

const mapDispatchToProps = dispatch => ({
  subscribe: show => e => dispatch(subscribeToShow(show))
})

const mapStateToProps = state => ({
  results: state.search.searchResult.filter(
    show => !state.shows.shows.find(s => s.id === show.id)
  )
})

export const SearchResults = connect(mapStateToProps, mapDispatchToProps)(
  SearchResultsView
)
