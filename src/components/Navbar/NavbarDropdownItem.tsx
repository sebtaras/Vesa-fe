import React, { useState } from "react";
import { Typography } from "antd";
import "../../styles/navbar.css";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";

interface Props {
	title: string;
}

const NavbarDropdownItem = ({ title }: Props) => {
	const { theme } = useTheme();
	const [isHoveredMenu, setIsHoveredMenu] = useState(false);
	const navigate = useNavigate();

	return (
		<div
			className="item"
			onClick={() => navigate(`/${title.toLowerCase()}`)}
			onMouseEnter={() => setIsHoveredMenu(true)}
			onMouseLeave={() => setIsHoveredMenu(false)}
		>
			<p style={{ color: theme.text_on_light }}>{title}</p>
		</div>
	);
};

export default NavbarDropdownItem;
