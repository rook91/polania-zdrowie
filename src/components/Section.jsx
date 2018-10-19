import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    h1: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        backgroundColor: theme.palette.text.secondary,
    },
    h2: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        backgroundColor: 'yellow'
    },
    p: {
        padding: theme.spacing.unit * 2,
        textAlign: 'left',
        backgroundColor: 'blue'
    },
});

class QuantumAnalyzer extends React.Component {

    getContent() {
        const {description, p, h2} = this.props;
        return [<Grid item xs={6}>
            <p className={p}>{description}</p>
        </Grid>,
            <Grid item xs={6}>
                <h3 className={h2}>xs=3</h3>
            </Grid>]
    }

    render() {
        const {h1, title} = this.props;
        console.log(h1)
        return <Grid container spacing={24}>
            {title && <Grid item xs={12}>
                <h1 className={h1}>{title}</h1>
            </Grid>}
            {this.getContent()}
        </Grid>
    }
}

QuantumAnalyzer.propTypes = {
    classes: PropTypes.object.isRequired,
    description: PropTypes.string.isRequired,
    imgAlign: PropTypes.oneOf(['left', 'right']),
    imagePath: PropTypes.string,
    title: PropTypes.string,
};

QuantumAnalyzer.defaultProps = {
    classes: {},
    description: '',
    imgAlign: 'right',
    imagePath: '',
    title: '',
};

export default withStyles(styles)(QuantumAnalyzer);
