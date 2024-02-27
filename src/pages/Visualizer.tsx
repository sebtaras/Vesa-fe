import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import { Layout } from "antd";
import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";

const Visualizer = () => {
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

export default Visualizer;
