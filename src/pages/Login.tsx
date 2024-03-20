import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import LoginForm from "../components/Forms/LoginForm";
import { useUser } from "../hooks/useUser";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const { user } = useUser();
	const navigate = useNavigate();
	useEffect(() => {
		console.log("user:", user);
		if (user) {
			navigate("/expenses");
		}
	}, [user]);

	return (
		<div style={{ display: "flex", flexDirection: "column", flex: 1, height: "100vh" }}>
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
		</div>
	);
};

export default Login;
