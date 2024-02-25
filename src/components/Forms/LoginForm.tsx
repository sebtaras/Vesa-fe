import React, { useState } from "react";
import "../../styles/login-form.css";
import { Typography } from "antd";
import { useTheme } from "../../hooks/useTheme";
import { largeText, validateEmail } from "../../util/constants";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import FormError from "../ErrorHandling.tsx/FormError";
type TRegisterForm = {
	email: string;
	password: string;
};
const LoginForm = () => {
	const {
		register,
		handleSubmit,
		watch,
		getValues,

		formState: { errors, isValidating, isValid },
	} = useForm<TRegisterForm>();
	const [isHovered, setIsHovered] = useState(false);
	const { theme } = useTheme();
	const navigate = useNavigate();

	const gradientStyle: React.CSSProperties = {
		background: `linear-gradient(60deg, ${theme.primary_hover} 40%, ${theme.primary} 80%)`,
	};

	const buttonStyle: React.CSSProperties = {
		backgroundColor: isHovered
			? `linear-gradient(60deg, ${theme.primary_hover} 20%, ${theme.primary} 80%)`
			: theme.primary,
	};

	return (
		<div className="login-container">
			<div className="login-container-left">
				<Typography style={{ fontSize: largeText, marginBottom: "0.75rem" }}>
					Login
				</Typography>
				<input
					{...register("email", {
						required: true,
						validate: (field, fieldValues) => validateEmail(field),
					})}
					className="input"
					defaultValue=""
					placeholder="Email"
				/>
				{errors.email?.type === "required" && (
					<FormError errorMessage={"Required field"} />
				)}
				{errors.email?.type === "validate" && (
					<FormError errorMessage={"Enter a valid email"} />
				)}
				<input
					{...register("password", { required: true, minLength: 6 })}
					defaultValue=""
					className="input"
					placeholder="Password"
				/>
				{errors.password?.type === "required" && (
					<FormError errorMessage={"Required field"} />
				)}
				{errors.password?.type === "minLength" && (
					<FormError errorMessage={"Should be longer than 6 symbols"} />
				)}
				<button
					className="button"
					style={buttonStyle}
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
				>
					<Typography>LOG IN</Typography>
				</button>
				<div className="other-option">
					<Typography onClick={() => navigate("/register")}>Register instead?</Typography>
				</div>
			</div>
			{/* <div className="login-container-right image"> */}
			<div className="login-container-right" style={gradientStyle}>
				<p style={{ fontSize: largeText }}>VE$A</p>
				<p style={{ textAlign: "center" }}>
					Ve-sa is a manual budgeting app designed to help you Sa-ve money!
				</p>
				<p>Log in to get started.</p>
				{/* </div> */}
			</div>
		</div>
	);
};

export default LoginForm;
