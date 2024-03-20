import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";
import "../../styles/login-form.css";
import { largeText, validateEmail } from "../../util/constants";
import FormError from "../ErrorHandling.tsx/FormError";

type TRegisterForm = {
	email: string;
	password: string;
	repeatPassword: string;
};

const RegisterForm = () => {
	const { theme } = useTheme();
	const [isHovered, setIsHovered] = useState(false);
	const {
		register,
		handleSubmit,
		getValues,
		formState: { errors },
	} = useForm<TRegisterForm>();

	const gradientStyle: React.CSSProperties = {
		background: `linear-gradient(60deg, ${theme.primary_hover} 40%, ${theme.primary} 80%)`,
	};

	const buttonStyle: React.CSSProperties = {
		backgroundColor: isHovered
			? `linear-gradient(60deg, ${theme.primary_hover} 20%, ${theme.primary} 80%)`
			: theme.primary,
	};

	const onSubmit = (data: any) => {
		console.log("handle", data);
	};

	return (
		<div className="login-container">
			<form className="login-container-left" onSubmit={handleSubmit(onSubmit)}>
				<div className="login-container-left-inner">
					<p style={{ fontSize: largeText, marginBottom: "0.75rem" }}>Register</p>
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
						style={{ marginTop: "1.5rem" }}
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
					<input
						{...register("repeatPassword", {
							required: true,
							validate: (value, formValues) => value === formValues.password,
						})}
						defaultValue=""
						className="input"
						placeholder="Repeat password"
					/>
					{errors.repeatPassword?.type === "required" && (
						<FormError errorMessage={"Required field"} />
					)}
					{errors.repeatPassword?.type === "validate" && (
						<FormError errorMessage={"Password do not match"} />
					)}
					<button
						className="button"
						type="submit"
						style={buttonStyle}
						onClick={() => {
							console.log("Values:", getValues());
							console.log("Errors:", errors);
						}}
						onMouseEnter={() => setIsHovered(true)}
						onMouseLeave={() => setIsHovered(false)}
					>
						<p style={{ color: theme.text_on_light }}>REGISTER</p>
					</button>
					<Link className="other-option" to="/login">
						<p style={{ color: theme.text_on_light }}>Login instead?</p>
					</Link>
				</div>
			</form>
			{/* <div className="login-container-right image"> */}
			<div className="login-container-right" style={gradientStyle}>
				<p style={{ fontSize: largeText, color: theme.text_on_dark }}>VE$A</p>
				<p style={{ textAlign: "center" }}>
					Ve-sa is a manual budgeting app designed to help you Sa-ve money!
				</p>
				<p style={{ color: theme.text_on_light }}>Log in to get started.</p>
				{/* </div> */}
			</div>
		</div>
	);
};

export default RegisterForm;
