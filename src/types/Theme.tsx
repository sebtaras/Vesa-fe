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
	text: string;
	success: string;
	warn: string;
	danger: string;
};

export const lightTheme: Theme = {
	type: ThemeType.LIGHT,
	text: "#000000",
	warn: "#f0a25d",
	success: "#9ded98",
	danger: "#f06060",
	background: "#fafafa",
	primary: "#9dd9f3",
	primary_complement: "#25996c",
	primary_hover: "#b8e2f2",
	secondary: "#9EA1D4",
	secondary_hover: "#AFC3F6",
};

export const darkTheme: Theme = {
	type: ThemeType.DARK,
	text: "#ffffff",
	warn: "#f0a25d",
	success: "#9ded98",
	danger: "#f06060",
	background: "#fafafa",
	primary: "#25996c",
	primary_complement: "#25996c",
	primary_hover: "#43b086",
	secondary: "#5b30ab",
	secondary_hover: "#7d56c7",
};

export const initialThemeContext: TThemeContext = {
	theme: lightTheme,
	loading: true,
	changeTheme: (theme: ThemeType) => {},
};
