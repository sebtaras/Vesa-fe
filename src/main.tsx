import React from "react";
import ReactDOM from "react-dom/client";
import { WrappedApp } from "./App";
import "./index.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<WrappedApp />
	</React.StrictMode>
);
