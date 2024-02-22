import "./App.css";

import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Expenses from "./pages/Expenses";
import Login from "./pages/Login";
import Visualizer from "./pages/Visualizer";
import Budget from "./pages/Budget";

const queryClient = new QueryClient();

export const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Navigate to={"/expenses"} />} />
			<Route path="/expenses" element={<Expenses />} />
			<Route path="/visualizer" element={<Visualizer />} />
			<Route path="/budget" element={<Budget />} />
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
