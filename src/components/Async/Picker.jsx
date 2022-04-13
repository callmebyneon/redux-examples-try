import React from 'react';
import PropTypes from 'prop-types';

import Title from '../Layout/Title';

const Picker = ({ value, onChange, options }) => (
  <span>
    <Title>{value}</Title>
    <select
      onChange={e => onChange(e.target.value)}
      value={value}
    >
      {options.map(opt => 
        <option value={opt} key={opt}>{opt}</option>
      )}
    </select>
  </span>
);

Picker.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Picker;