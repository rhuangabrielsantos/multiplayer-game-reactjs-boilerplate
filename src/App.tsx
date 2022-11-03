import { ThemeProvider } from 'styled-components';
import { Router } from './Router';

import { theme, GlobalStyle } from './styles';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Router />
    </ThemeProvider>
  );
};
