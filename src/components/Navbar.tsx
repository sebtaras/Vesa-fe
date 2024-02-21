import React from "react";
import { Flex, Layout, List, Menu } from "antd";
import { pages } from "../util/constants";
import "../styles/navbar.css";
import { useLocation, useNavigate } from "react-router-dom";
import HeaderLogo from "./HeaderLogo";

const { Header } = Layout;

const Navbar = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const getActiveKey = (): string => {
		if (location.pathname.includes("home")) return "/home";
		else if (location.pathname.includes("visualize")) return "/visualize";
		else return "/home";
	};

	return (
		<Header className="header">
			<HeaderLogo />
			<Menu
				className="menu"
				mode="horizontal"
				items={pages}
				style={{ flex: 1 }}
				activeKey={getActiveKey()}
				onClick={({ key }) => navigate(key)}
			/>
			<div>STA???</div>
		</Header>
	);
};

export default Navbar;
