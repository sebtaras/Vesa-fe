import React from "react";
import Navbar from "../components/Navbar/Navbar";
import RegisterForm from "../components/Forms/RegisterForm";

const Register = () => {
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
				<RegisterForm />
			</div>
		</div>
	);
};

export default Register;
