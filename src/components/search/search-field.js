// @ts-check
import { create } from '../../dom.js';
import { connect } from '../../../vendors.bundle.js';
import { updateSeachField } from '../../actions/search.actions.js';

export function SearchFieldView({ value, onChange }) {
  return create.input('.form-control', { type: 'search', onChange, value });
}

const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(updateSeachField(event.target.value))
});

const mapStateToProps = state => ({ value: state.search.value });

export const SearchField = connect(mapStateToProps, mapDispatchToProps)(SearchFieldView);
