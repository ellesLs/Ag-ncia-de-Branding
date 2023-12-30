import { useEffect, useState } from 'react';

type useLocalStorageProps = {
  key: string;
  InitialTheme: string;
};

export function useDarkModeWithLocalStorage({ key, InitialTheme }: useLocalStorageProps) {
  const [theme, setTheme] = useState<string>(() => {
    const storageValue = localStorage.getItem(key);
    return storageValue ? JSON.parse(storageValue) : InitialTheme;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(theme));
  }, [key, theme]);

  const togglTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return {
    theme,
    setTheme,
    togglTheme,
  };
}
