import "./App.css";

import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";

const queryClient = new QueryClient();

export const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Navigate to={"/home"} />} />
			<Route path="/home" element={<Home />} />
			<Route path="/visualize" element={<Home />} />
			<Route path="/login" element={<Login />} />
		</Routes>
	);
};

export const WrappedApp = () => {
	return (
		<BrowserRouter>
			<QueryClientProvider client={queryClient}>
				<App />
			</QueryClientProvider>
		</BrowserRouter>
	);
};
