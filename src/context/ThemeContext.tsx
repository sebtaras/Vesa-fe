import { createContext, useEffect, useState } from "react";
import {
	TThemeContext,
	Theme,
	ThemeType,
	darkTheme,
	initialThemeContext,
	lightTheme,
} from "../types/Theme";

export const ThemeContext = createContext<TThemeContext>(initialThemeContext);

export const ThemeProvider = ({ children }: any) => {
	const [theme, setTheme] = useState<Theme>(lightTheme);
	const [loading, setLoading] = useState(true);

	const changeTheme = (theme: ThemeType) => {
		switch (theme) {
			case ThemeType.LIGHT:
				setTheme(lightTheme);
				break;
			case ThemeType.DARK:
				setTheme(darkTheme);
				break;
		}
		localStorage.setItem("vesa-theme", theme);
	};

	useEffect(() => {
		const stored = localStorage.getItem("vesa-theme") as ThemeType;
		if (stored) {
			changeTheme(stored);
		} else {
			localStorage.setItem("vesa-theme", ThemeType.LIGHT);
			setTheme(lightTheme);
		}
		setLoading(false);
	}, []);

	return (
		<ThemeContext.Provider
			value={{
				theme,
				loading,
				changeTheme,
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
};
