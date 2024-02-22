export const pagesNav = [
	{ key: "/Home", label: "Home" },
	{ key: "/Visualize", label: "Visualize" },
];

export const pages = ["Expenses", "Visualizer", "Budget"];

export const smallText = "0.8rem";
export const mediumText = "1rem";
export const largeText = "1.5rem";
export const capitalize = (s: string) => {
	if (!s) return "";
	try {
		return s.charAt(0).toUpperCase() + s.substring(1, s.length);
	} catch {
		return s;
	}
};
