export enum ThemeType {
	DARK = "dark",
	LIGHT = "light",
}

export type TThemeContext = {
	theme: Theme;
	loading: boolean;
	changeTheme: (theme: ThemeType) => void;
};

export type Theme = {
	type: ThemeType;
	primary: string;
	primary_complement: string;
	primary_hover: string;
	secondary: string;
	secondary_hover: string;
	background: string;
	text_on_light: string;
	text_on_dark: string;
	success: string;
	warn: string;
	danger: string;
	grey: string;
};

export const lightTheme: Theme = {
	type: ThemeType.LIGHT,
	text_on_dark: "#ffffff",
	text_on_light: "#000000",
	warn: "#f0a25d",
	success: "#9ded98",
	danger: "#f06060",
	background: "#fafafa",
	// primary: "#9dd9f3",
	primary: "#078278",
	primary_complement: "#25996c",
	primary_hover: "#b8e2f2",
	secondary: "#17ada1",
	secondary_hover: "#AFC3F6",
	grey: "#c4c4c4",
};

export const darkTheme: Theme = {
	type: ThemeType.DARK,
	text_on_dark: "#ffffff",
	text_on_light: "#ffffff",
	warn: "#f0a25d",
	success: "#9ded98",
	danger: "#f06060",
	background: "#fafafa",
	primary: "#25996c",
	primary_complement: "#12b535",
	primary_hover: "#43b086",
	secondary: "#12b535",
	secondary_hover: "#7d56c7",
	grey: "#c4c4c4",
};

export const initialThemeContext: TThemeContext = {
	theme: lightTheme,
	loading: true,
	changeTheme: (theme: ThemeType) => {},
};
