import React, { useEffect } from "react";
import { Flex, Layout } from "antd";
import Navbar from "../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";

const { Content } = Layout;

const Expenses = () => {
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

export default Expenses;
