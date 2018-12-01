import React from "react";
import {Link} from "react-router5";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";

function NavItem(props) {
    const {className, config} = props;
    const {name, displayText} = config;
    return (
        <MenuItem className={className}>
            <Link routeName={name}>{displayText}</Link>
        </MenuItem>);
}

export default NavItem;
