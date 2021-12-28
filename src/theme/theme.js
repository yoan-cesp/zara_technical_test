import { createMuiTheme } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

const appTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#2196f3',
      light: '#ffffff',
    },
    secondary: {
      main: deepPurple['400'],
    },
    background: {
      default: '#f5f5f5',
    },
  },
});

export default appTheme;
