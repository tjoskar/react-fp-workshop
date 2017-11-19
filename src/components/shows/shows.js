// @ts-check
import { create, e } from '../../dom.js';
import { connect } from '../../../vendors.bundle.js';
import { unsubscribeToShow } from '../../store/shows/show.actions.js';
import { Show } from './show.js';

export function ShowsView({ shows, unsubscribe }) {
  console.log('shows: ', shows);
  return shows.map(show =>
    e(Show, {
      show,
      onClick: unsubscribe(show.id),
      key: show.id
    })
  );
}

const mapDispatchToProps = dispatch => ({
  unsubscribe: id => event => dispatch(unsubscribeToShow(id))
});

const mapStateToProps = state => ({ shows: state.shows.shows });

export const Shows = connect(mapStateToProps, mapDispatchToProps)(ShowsView);
