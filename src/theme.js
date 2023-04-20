import { createTheme } from '@mui/material';
import '@fontsource/inter/800.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/300.css';

const theme = createTheme({
    palette: {
      primary: {
        main: '#C45AB3',
        light: '#FED4E7'
      },
      secondary: {
        main: '#DEF2C8',
      }
    },
    typography: {
      fontFamily: 'inter'
    },
  });

  export default theme;