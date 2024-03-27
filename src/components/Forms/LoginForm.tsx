import React, { useState } from "react";
import "../../styles/login-form.css";
import { useTheme } from "../../hooks/useTheme";
import { largeText, validateEmail } from "../../util/constants";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import FormError from "../ErrorHandling.tsx/FormError";
import { useLogin } from "../../hooks/api/useLogin";

export type TLoginForm = {
	email: string;
	password: string;
};

const LoginForm = () => {
	const {
		register,
		handleSubmit,
		getValues,
		formState: { errors },
	} = useForm<TLoginForm>();
	const [isHovered, setIsHovered] = useState(false);
	const { theme } = useTheme();
	const { mutate: loginMutation, isLoading } = useLogin();

	const gradientStyle: React.CSSProperties = {
		background: `linear-gradient(60deg, ${theme.primary} 40%, ${theme.secondary} 80%)`,
	};
	const buttonStyle: React.CSSProperties = {
		backgroundColor: isHovered
			? `linear-gradient(60deg, ${theme.primary_hover} 20%, ${theme.primary} 80%)`
			: theme.primary,
	};

	const onSubmit = (data: TLoginForm) => {
		loginMutation(data);
	};

	return (
		<div className="login-container">
			<form className="login-container-left" onSubmit={handleSubmit(onSubmit)}>
				<div className="login-container-left-inner">
					<p style={{ fontSize: largeText, marginBottom: "0.75rem" }}>Login</p>
					<input
						{...register("email", {
							required: true,
							validate: (field) => validateEmail(field),
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
						disabled={isLoading}
					>
						<p style={{ color: theme.text_on_dark }}>LOG IN</p>
					</button>
					<Link className="other-option" to="/register">
						<p style={{ color: theme.text_on_light }}>Register instead?</p>
					</Link>
				</div>
			</form>
			<div className="login-container-right" style={gradientStyle}>
				<p style={{ fontSize: largeText, color: theme.text_on_dark }}>VE$A</p>
				<p style={{ textAlign: "center", color: theme.text_on_dark }}>
					Ve-sa is a manual budgeting app designed to help you Sa-ve money!
				</p>
				<p style={{ color: theme.text_on_dark }}>Log in to get started.</p>
			</div>
		</div>
	);
};

export default LoginForm;
