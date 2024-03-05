import { Flex } from "antd";
import { useTheme } from "../../hooks/useTheme";
import { largeText } from "../../util/constants";

const NavbarLogo = () => {
	const { theme } = useTheme();

	return (
		<Flex align="center">
			<p style={{ fontSize: largeText, color: theme.text_on_dark }}>VE$A</p>
		</Flex>
	);
};

export default NavbarLogo;
