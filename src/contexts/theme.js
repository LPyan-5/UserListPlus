import { createContext, useEffect, useState } from 'react';

const themes = {
    dark: {
        backgroundColor: '#14111f',
        color: 'white',
    },
    light: {
        backgroundColor: '#E5E5E5',
        color: 'black',
    },
};
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(false);
    const theme = isDark ? themes.dark : themes.light;

    const toggleTheme = () => {
        localStorage.setItem('isDark', JSON.stringify(!isDark));
        setIsDark(!isDark);
    };

    useEffect(() => {
        const isDark = localStorage.getItem('isDark') === 'true';
        setIsDark(isDark);
    }, []);

    return (
        <ThemeContext.Provider value={[{ theme, isDark }, toggleTheme]}>
            {children}
        </ThemeContext.Provider>
    );
};
