import { createTheme } from '@mui/system';

const theme = createTheme({
    palette: {
      mode: 'light', // Set the mode to 'light' or 'dark' based on your preference
      primary: {
        main: 'white', // Specify your primary color
      },
      background: {
        default: 'gray.800', // Specify the default background color
      },
      text: {
        primary: 'white', // Specify the primary text color
      },
      grey: {
        500: 'gray.500', // Specify custom grey colors
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
        '2xl': '2rem', // Specify custom font sizes
        md: '1.2rem',
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