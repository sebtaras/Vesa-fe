import React from "react";
import ReactDOM from "react-dom/client";
import { WrappedApp } from "./App";
import { ConfigProvider } from "antd";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ConfigProvider
			theme={{
				token: {
					fontFamily: '"Montserrat", "Roboto", "Noto Sans", sans-serif',
				},
			}}
		>
			<WrappedApp />
		</ConfigProvider>
	</React.StrictMode>
);
