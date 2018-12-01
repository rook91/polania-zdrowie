import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Section from '../components/Section'

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    container: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        backgroundColor: 'yellow'
    },
});

function QuantumAnalyzer(props) {
    const {classes} = props;

    return (
        <Grid container spacing={24} className={classes.container}>
            <Section
                title={'ANALIZATOR  SKŁADU  ORGANIZMU'}
                description={'Kwantowy Analizator łączy w sobie zaawansowane technologicznie, innowacyjne osiągnięcia z dziedziny medycyny, bioinformatyki, inżynierii biomedycznej i innych nauk. Korzystanie z kwantowej medycyny jako podstawy znalazło zastosowanie w opracowaniu zaawansowanego sprzętu elektronicznego umożliwiającego odbiór słabego pola magnetycznego ludzkich komórek. Urządzenie zostało skonstruowane w oparciu o badania naukowe przeprowadzane na astronautach. Dokładność i precyzja stały się obligatoryjnym elementem dla tych pomiarów. Pomiar ten służy do analizy i określenia stanu zdrowia osoby badanej oraz zdiagnozowania głównych problemów na poziomie komórki.'}
            />
            <Section
                description={'W ciągu 3 minutowego testu uzyskasz wiedzę jak z ponad 20 badań laboratoryjnych. WITAMINY, MINERAŁY, HORMONY, AMINOKWASY. Pomiar trwa krótko , nie jest uciążliwy ani niebezpieczny dla klienta i co najważniejsze daje niezwykle szeroką informację o tym co się dzieje w organizmie. Wyniki są porównywalne z wynikami laboratoryjnymi. '}
            />
            <Section/>
            <Section/>
        </Grid>
    );
}

QuantumAnalyzer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(QuantumAnalyzer);
