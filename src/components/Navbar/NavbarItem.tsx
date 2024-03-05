import React, { useState } from "react";
import "../../styles/navbar.css";
import { useTheme } from "../../hooks/useTheme";

interface Props {
	page: { title: string; icon: Function };
	isSelected: boolean;
	handleNavigate: (destination: string) => void;
}

const NavbarItem = ({ page, isSelected, handleNavigate }: Props) => {
	const { theme } = useTheme();
	const [isHovered, setIsHovered] = useState(false);

	const selectedStyle: React.CSSProperties = {
		backgroundColor: isHovered ? theme.secondary_hover : theme.secondary,
		// boxShadow: "inset 0.5px 1px 1px 1px rgba(0, 0, 0, 0.25)",
		transition: "background-color 0.15s ease-in-out",
	};

	const style: React.CSSProperties = {
		backgroundColor: isHovered ? theme.primary_hover : theme.primary,
	};

	return (
		<div
			className={"item"}
			style={isSelected ? selectedStyle : style}
			onClick={() => handleNavigate(page.title.toLowerCase())}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div
				style={{
					marginRight: "0.3rem",
				}}
			>
				{page.icon(theme)}
			</div>
			<p style={{ color: theme.text_on_dark }}>{page.title}</p>
		</div>
	);
};

export default NavbarItem;
