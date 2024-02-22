import { Flex, Typography } from "antd";
import React from "react";
import { largeText } from "../../util/constants";
import { useTheme } from "../../hooks/useTheme";

const NavbarLogo = () => {
	const { theme } = useTheme();

	return (
		<Flex align="center">
			<Typography style={{ fontSize: largeText, color: theme.text }}>VE$A</Typography>
		</Flex>
	);
};

export default NavbarLogo;
