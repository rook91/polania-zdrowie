/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router5';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';
import PropTypes from 'prop-types';

function NavItem(props) {
  const { className, config } = props;
  const { name, displayText } = config;
  return (
    <MenuItem className={className}>
      <Link routeName={name}>{displayText}</Link>
    </MenuItem>);
}

NavItem.defaultProps = {
  className: '',
};

NavItem.propTypes = {
  className: PropTypes.string,
  config: PropTypes.shape({
    name: PropTypes.string,
    path: PropTypes.string,
    displayText: PropTypes.string,
  }).isRequired,
};

export default NavItem;
