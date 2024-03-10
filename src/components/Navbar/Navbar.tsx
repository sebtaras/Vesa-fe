import React, { useEffect, useState } from "react";
import { useTheme } from "../../hooks/useTheme";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../styles/navbar.css";
import NavbarItem from "./NavbarItem";
import { Typography } from "antd";
import { largeText, pages } from "../../util/constants";
import NavbarMenu from "./NavbarMenu";
import { useUser } from "../../hooks/useUser";

const Navbar = () => {
	const { theme } = useTheme();
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const [active, setActive] = useState("");
	const { user, logout } = useUser();

	const handleNavigate = (destination: string) => {
		if (destination !== active) {
			console.log("going from", active, "to", destination);
			setActive(destination);
			navigate("/" + destination);
		}
	};

	useEffect(() => {
		if (pathname.toLowerCase().includes("expenses")) setActive("expenses");
		else if (pathname.toLowerCase().includes("visualizer")) setActive("visualizer");
		else if (pathname.toLowerCase().includes("budget")) setActive("budget");
	}, [pathname]);

	return (
		<div>
			<div className="navbar-large" style={{ backgroundColor: theme.primary }}>
				<div className="logo" onClick={() => console.log("user", user)}>
					<p style={{ fontSize: largeText, color: theme.text_on_dark }}>VE$A</p>
				</div>

				<div className="middle-menu" style={{ backgroundColor: theme.primary }}>
					{user
						? pages.map((page, index) => {
								const pageLower = page.title.toLowerCase();
								return (
									<NavbarItem
										key={index}
										page={page}
										isSelected={pageLower === active}
										handleNavigate={handleNavigate}
									/>
								);
						  })
						: null}
				</div>
				<div className="profile">
					{user ? (
						<p style={{ color: theme.text_on_dark }} onClick={() => logout()}>
							Logout
						</p>
					) : (
						<Link to="/login">Login</Link>
					)}
				</div>
			</div>
			<div className="navbar-small" style={{ backgroundColor: theme.primary }}>
				<div style={{ display: "flex", flex: 1 }}>
					<NavbarMenu title={active} handleNavigate={handleNavigate} />
				</div>
				<div className="small-logo">
					<p style={{ fontSize: largeText, color: theme.text_on_dark }}>VE$A</p>
				</div>
				<div className="small-profile">
					<p style={{ color: theme.text_on_dark }}>ME =')</p>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
