import "./App.css";

import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Expenses from "./pages/Expenses";
import Login from "./pages/Login";
import Visualizer from "./pages/Visualizer";
import Budget from "./pages/Budget";
import Register from "./pages/Register";
import { UserProvider } from "./context/UserContext";
import { PrimeReactProvider } from "primereact/api";

const queryClient = new QueryClient();

export const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Navigate to={"/expenses"} />} />
			<Route path="/expenses" element={<Expenses />} />
			<Route path="/visualizer" element={<Visualizer />} />
			<Route path="/budget" element={<Budget />} />
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
		</Routes>
	);
};

export const WrappedApp = () => {
	return (
		<BrowserRouter>
			<QueryClientProvider client={queryClient}>
				<UserProvider>
					<PrimeReactProvider>
						<App />
					</PrimeReactProvider>
				</UserProvider>
			</QueryClientProvider>
		</BrowserRouter>
	);
};
