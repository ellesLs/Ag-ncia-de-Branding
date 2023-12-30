import { ThemeProvider } from 'styled-components';
import Landing from './pages/Landing';
import { GlobalStyles } from './styles/GlobalStyles';

import { lightTheme } from './styles/themes/light';
import { darkTheme } from './styles/themes/dark';
import { useDarkModeWithLocalStorage } from './hooks/useDarkModeWithLocalStorage';

function App() {
  const { theme, togglTheme } = useDarkModeWithLocalStorage({
    key: 'theme',
    InitialTheme: lightTheme.title,
  });
  const themeMode = theme === 'light' ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Landing onToggle={togglTheme} />
    </ThemeProvider>
  );
}

export default App;
