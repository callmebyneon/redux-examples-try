import { connect } from 'react-redux';

import { setVisibilityFilter } from '~/actions/TodoActions';

import Link from '~/components/Todo/Link';

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  setFilter: () => {
    dispatch(setVisibilityFilter(ownProps.filter))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);
