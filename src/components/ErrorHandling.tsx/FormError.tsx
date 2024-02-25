import React from "react";
import { useTheme } from "../../hooks/useTheme";

interface Props {
	errorMessage: string;
}

const FormError = ({ errorMessage }: Props) => {
	const { theme } = useTheme();

	return (
		<div style={{ width: "100%" }}>
			<p style={{ color: theme.danger }}>{errorMessage}</p>
		</div>
	);
};

export default FormError;
