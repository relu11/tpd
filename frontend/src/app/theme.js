import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#171c8f'
        },
        secondary: {
            main: '#171c8f',
            dark: '#7c2529'
        },
        info: {
            main: '#018786'
        }
    },
    typography: {
        fontFamily: [
            '"Segoe UI"',
            '-apple-system',
            'BlinkMacSystemFont',
            'Roboto',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(','),
      
    }
});

export default theme;
