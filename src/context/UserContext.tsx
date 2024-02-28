import { createContext, useEffect, useState } from "react";
import { useRefresh } from "../hooks/api/useRefresh";
import { jwtDecode } from "jwt-decode";

type Tokens = {
	access: string;
	refresh: string;
};

type User = {
	id: number;
	email: string;
	firstName: string;
	lastName: string;
};

type TUserContext = {
	user: User | null;
	loading: boolean;
	logout: () => void;
	setTokens: (tokens: Tokens) => void;
	setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

const initialValue: TUserContext = {
	user: null,
	loading: true,
	logout: () => {},
	setTokens: (tokens: Tokens) => {},
	setUser: () => {},
};

export const UserContext = createContext<TUserContext>(initialValue);

export const UserProvider = ({ children }: any) => {
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(true);
	const { mutateAsync: refresh, isLoading } = useRefresh();
	console.log("User from context", user);
	const setTokens = (tokens: Tokens) => {
		localStorage.setItem("refresh", tokens.refresh);
	};

	const logout = () => {
		setUser(null);
		localStorage.removeItem("access");
		localStorage.removeItem("refresh");
	};

	const updateRefresh = async () => {
		const refreshToken = localStorage.getItem("refresh");
		if (!user && refreshToken) {
			const result = await refresh(refreshToken);
			if (result.type === "success") {
				localStorage.setItem("refresh", result.refresh);
				const user: any = jwtDecode(result.access);
				setUser({
					id: user.user_id,
					email: user.username,
					firstName: "NAME",
					lastName: "SURNAME",
				});
			}
		}
	};

	useEffect(() => {
		updateRefresh();
	}, [user]);

	return (
		<>
			<UserContext.Provider
				value={{
					user,
					loading,
					logout,
					setTokens,
					setUser,
				}}
			>
				{children}
			</UserContext.Provider>
		</>
	);
};
