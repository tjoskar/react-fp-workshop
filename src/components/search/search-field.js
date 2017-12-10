import { input } from 'react-hyperscript-helpers'
import { connect } from 'react-redux'
import { updateSeachField } from '../../store/search/search.actions'

function SearchFieldView({ value, onChange }) {
  return input('.form-control', { type: 'search', onChange, value })
}

const mapDispatchToProps = {
  onChange: event => updateSeachField(event.target.value)
}

const mapStateToProps = state => ({ value: state.search.value })

export const SearchField = connect(mapStateToProps, mapDispatchToProps)(SearchFieldView)
