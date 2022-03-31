import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Link = ({ active, children, setFilter }) => (
  // eslint-disable jsx-a11y/anchor-is-valid
  <a
    className={classnames({ selected: active })}
    onClick={() => setFilter()}
  >
    {children}
  </a>
);


Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  setFilter: PropTypes.func.isRequired
};

export default Link;
