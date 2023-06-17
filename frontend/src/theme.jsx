import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      mode: 'dark', // Set the mode to 'light' or 'dark' based on your preference
      primary: {
        main: '#ffffff', // Specify your primary color
      },
      background: {
        default: '#424242', // Specify the default background color
      },
      text: {
        primary: '#ffffff', // Specify the primary text color
      },
      grey: {
        500: '#9e9e9e', // Specify custom grey colors
      },
    },
    breakpoints: {
      values: {
        md: 960, // Set the value for the 'md' breakpoint
      },
    },
    shape: {
      borderRadius: 8, // Specify the border radius value
    },
    shadows: {
      8: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Specify custom shadow values
    },
    spacing: 8, // Specify the default spacing value
    typography: {
      fontSize: {
        // Specify custom font sizes
        md: 4,
      },
      fontWeight: {
        semibold: 600, // Specify custom font weights
        bold: 'bold',
        normal: 'normal',
      },
      lineHeight: {
        tight: 'tight', // Specify custom line heights
      },
    },
  });
  
  export default theme;