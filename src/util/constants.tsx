import { BsFillPiggyBankFill } from "react-icons/bs";
import { Theme } from "../types/Theme";
import { MdAttachMoney } from "react-icons/md";
import { FaChartBar } from "react-icons/fa";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

export const pagesNav = [
	{ key: "/Home", label: "Home" },
	{ key: "/Visualize", label: "Visualize" },
];

export const pages = [
	{
		title: "Expenses",
		icon: (theme: Theme) => (
			<RiMoneyDollarCircleFill color={theme.text_on_dark} size={"1.3rem"} />
		),
	},
	{
		title: "Visualizer",
		icon: (theme: Theme) => <FaChartBar color={theme.text_on_dark} size={"1.2rem"} />,
	},
	{
		title: "Budget",
		icon: (theme: Theme) => (
			<BsFillPiggyBankFill color={theme.text_on_dark} size={"1.2rem"} />
		),
	},
];

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

export const validateEmail = (email: string): boolean => {
	return !!String(email)
		.toLowerCase()
		.match(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		);
};
