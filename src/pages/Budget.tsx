import { Layout } from "antd";
import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";

const Budget = () => {
	const navigate = useNavigate();
	const { user } = useUser();

	useEffect(() => {
		if (!user) {
			navigate("/login");
		}
	}, [user]);

	return (
		<Layout>
			<Navbar />
		</Layout>
	);
};

export default Budget;
