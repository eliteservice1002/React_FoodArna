import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
    palette: {
        primary: { dark: '#11274B', main: '#ffffff', light: 'rgb(236, 242, 251)', extraLight: 'rgb(247, 251, 254)' },
        secondary: { main: '#F3BD48' },
        // background: {
        //     default: '#11274B',
        //     paper: '#FFF'
        // },
        profile: { dark: '#162649', main: '#757F93', light: '#EAEDF1'},
        // success: '#00FF00',
        textOnPrimary: '#FFF',
        textOnSurface: '#464646'
    },
    widths: {
        drawerWidth: 150
    },
    typography: {
        fontFamily: [
            'Sentinel-Black',
            'Roboto',
            'sans-serif'
        ].join(','),
        secondaryFont: 'Roboto',
        h1: {
            color: 'inherit',
            fontSize: '107.23px',
            letterSpacing: '-1.5px'
        },
        h2: {
            color: 'inherit',
            fontSize: '60px',
            letterSpacing: '-0.5px',
            fontFamily: 'Roboto',
            fontWeight: '300'
        },
        h3: {
            color: 'inherit',
            fontSize: '53.61px',
            letterSpacing: '0px'
        },
        h4: {
            color: 'inherit',
            fontSize: '37.98px',
            letterSpacing: '0.25px'
        },
        h5: {
            color: 'inherit',
            fontSize: '26.81px',
            letterSpacing: '0px'
        },
        h6: {
            color: 'inherit',
            fontSize: '22.34px',
            letterSpacing: '0.25px'
        },
        body1: {
            color: 'inherit',
            fontSize: '16px',
            letterSpacing: '0.5px',
            fontFamily: 'Roboto',
            fontWeight: '300'
        },
        body2: {
            color: 'inherit',
            fontSize: '14px',
            letterSpacing: '0.25px',
            fontFamily: 'Roboto',
            fontWeight: '300'
        },
        subtitle1: {
            color: 'inherit',
            fontSize: '17.87px',
            letterSpacing: '0.15px'
        },
        subtitle2: {
            color: 'inherit',
            fontSize: '14px',
            letterSpacing: '0.1px',
            fontFamily: 'Roboto',
            fontWeight: '300'
        },
        button: {
            color: 'inherit',
            fontSize: '15.64px',
            letterSpacing: '1.25px',
            fontFamily: 'Roboto',
            fontWeight: '300',
            textTransform: 'none'
        },
        caption: {
            color: 'inherit',
            fontSize: '13.4px',
            letterSpacing: '0.4px'
        },
        overline: {
            color: 'inherit',
            fontSize: '12px',
            letterSpacing: '2px',
            fontFamily: 'Roboto',
            fontWeight: '400'
        }
    }
});