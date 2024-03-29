import { Layout } from "antd";
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import LoginForm from "../components/Forms/LoginForm";

const Login = () => {
	return (
		<Layout
			style={{ display: "flex", flexDirection: "column", flex: 1, height: "100vh" }}
		>
			<Navbar />
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<LoginForm />
			</div>
		</Layout>
	);
};

export default Login;
