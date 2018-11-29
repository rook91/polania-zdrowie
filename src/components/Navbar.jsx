import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

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
    constructor(props) {
        super(props);
    }

    render() {
        const {classes, menuItems} = this.props;
        return (
            <AppBar className={classes.appBar} position="static">
                <Toolbar>
                    <img src="img/logo_150_80.png"/>
                    <MenuList>
                        {menuItems.map((name, i) =>
                            (<MenuItem key={i} className={classes.menuItem}>
                                <a>{name}</a>
                            </MenuItem>))
                        }
                    </MenuList>
                </Toolbar>
            </AppBar>
        )
    }
}

Navbar.propTypes = {
    classes: PropTypes.object.isRequired,
    menuItems: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(Navbar);