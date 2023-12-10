import { ThemeProvider } from 'styled-components';
import Landing from './pages/Landing';
import { GlobalStyles } from './styles/GlobalStyles';
import { useState } from 'react';
import { lightTheme } from './styles/themes/light';
import { darkTheme } from './styles/themes/dark';

function App() {
  const [theme, setTheme] = useState(lightTheme);

  const togglTheme = () => {
    setTheme(theme.title === 'light' ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Landing toggle={togglTheme} theme={theme} />
    </ThemeProvider>
  );
}

export default App;
