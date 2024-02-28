export type TLoginSuccess = {
	type: "success";
	access: string;
	refresh: string;
};

export type TLoginError = {
	type: "error";
	detail: string;
};

export type TLoginResult = TLoginSuccess | TLoginError;
