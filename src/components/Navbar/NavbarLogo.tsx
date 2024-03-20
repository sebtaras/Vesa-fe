import { useTheme } from "../../hooks/useTheme";
import { largeText } from "../../util/constants";

const NavbarLogo = () => {
	const { theme } = useTheme();

	return (
		<div style={{ display: "flex", alignItems: "center" }}>
			<p style={{ fontSize: largeText, color: theme.text_on_dark }}>VE$A</p>
		</div>
	);
};

export default NavbarLogo;
