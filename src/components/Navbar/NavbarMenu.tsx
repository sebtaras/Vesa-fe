import { Typography } from "antd";
import React, { useState, useRef, useEffect } from "react";
import "../../styles/navbar.css";
import { useTheme } from "../../hooks/useTheme";
import { capitalize, pages } from "../../util/constants";
import NavbarItem from "./NavbarItem";

interface Props {
	title: string;
	handleNavigate: (destination: string) => void;
}

const NavbarMenu = ({ title, handleNavigate }: Props) => {
	const { theme } = useTheme();
	const [isHoveredMenu, setIsHoveredMenu] = useState(false);
	const [menuOpened, setMenuOpened] = useState(false);
	const dropdownMenu = useRef<HTMLDivElement | null>(null);
	const menu = useRef<HTMLDivElement | null>(null);

	const closeMenu = (e: any) => {
		if (
			menuOpened &&
			!dropdownMenu.current?.contains(e.target) &&
			!menu.current?.contains(e.target)
		) {
			setMenuOpened(false);
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", closeMenu);
		return () => document.removeEventListener("mousedown", closeMenu);
	});

	const openedMenuStyle: React.CSSProperties = {
		backgroundColor: isHoveredMenu ? theme.secondary_hover : theme.secondary,
		boxShadow: "inset 0.5px 1px 1px 1px rgba(0, 0, 0, 0.25)",
		transition: "background-color 0.15s ease-in-out",
	};

	const menuStyle: React.CSSProperties = {
		backgroundColor: isHoveredMenu ? theme.primary_hover : theme.primary,
	};

	const getIcon = () => {
		pages.forEach((page) => {
			if (page.title === title) {
				return page;
			}
		});
		return pages[0];
	};

	return (
		<>
			<div
				ref={menu}
				className={"item small-menu"}
				style={menuOpened ? openedMenuStyle : menuStyle}
				onClick={() => setMenuOpened(!menuOpened)}
				onMouseEnter={() => setIsHoveredMenu(true)}
				onMouseLeave={() => setIsHoveredMenu(false)}
			>
				<div
					style={{
						marginRight: "0.3rem",
					}}
				>
					{getIcon().icon(theme)}
				</div>
				<p style={{ color: theme.text_on_dark }}>{capitalize(title)}</p>
			</div>
			{menuOpened ? (
				<div
					ref={dropdownMenu}
					className="dropdown-menu"
					style={{ backgroundColor: theme.primary }}
				>
					{pages.map((page, index) => {
						return (
							<div key={index} className="dropdown-item-container">
								{/* <NavbarDropdownItem title={page} /> */}
								<NavbarItem
									isSelected={title === page.title.toLowerCase()}
									page={page}
									handleNavigate={() => {
										handleNavigate(page.title.toLowerCase());
									}}
								/>
							</div>
						);
					})}
				</div>
			) : null}
		</>
	);
};

export default NavbarMenu;
