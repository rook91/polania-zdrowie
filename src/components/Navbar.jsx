import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuList from '@material-ui/core/MenuList';
import NavItem from './NavItem';

const styles = () => ({
  menuItem: {
    display: 'inline',
    color: '#ffffff',
    'text-align': 'center',
    '&:hover': {
      'background-color': 'rgba(0, 0, 0, 0.0)',
    },
  },
  appBar: {
    'background-color': '#5cb85c',
  },
});

class Navbar extends Component {
  shouldComponentUpdate(nextProps) {
    const { menuItems } = this.props;
    return nextProps.menuItems.length !== menuItems.length;
  }

  render() {
    const { classes, menuItems } = this.props;
    return (
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <img alt="logo" src="img/logo_150_80.png" />
          <MenuList>
            {menuItems.map(conf => (
              <NavItem key={conf.name} className={classes.menuItem} config={conf} />))
            }
          </MenuList>
        </Toolbar>
      </AppBar>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.shape().isRequired,
  menuItems: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    path: PropTypes.string,
    displayText: PropTypes.string,
  })).isRequired,
};

export default withStyles(styles)(Navbar);
