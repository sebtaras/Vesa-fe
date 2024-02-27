import { createContext, useState } from "react";

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
	setTokens: (tokens: Tokens) => void;
	setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

const initialValue: TUserContext = {
	user: null,
	loading: true,
	setTokens: (tokens: Tokens) => {},
	setUser: () => {},
};

export const UserContext = createContext<TUserContext>(initialValue);

export const UserProvider = ({ children }: any) => {
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(true);

	const setTokens = (tokens: Tokens) => {
		//store tokens somewhere
		console.log("SET TOKENS", tokens);
		localStorage.setItem("refresh", tokens.refresh);
	};
	console.log("USER", user);
	return (
		<>
			<UserContext.Provider
				value={{
					user,
					loading,
					setTokens,
					setUser,
				}}
			>
				{children}
			</UserContext.Provider>
		</>
	);
};
