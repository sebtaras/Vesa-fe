import { useMutation, useQueryClient } from "react-query";
import { TLoginForm } from "../../components/Forms/LoginForm";
import { useUser } from "../useUser";
import { jwtDecode } from "jwt-decode";
import { axiosClient } from "../../util/axiosClient";
import { TLoginResult } from "../../types/Auth";

export const useLogin = () => {
	const queryClient = useQueryClient();
	const { setTokens, setUser } = useUser();

	const login = async (formData: TLoginForm): Promise<TLoginResult> => {
		try {
			const { data } = await axiosClient.post<any>(`api/token/`, {
				username: formData.email,
				password: formData.password,
			});
			if (data.detail) {
				return {
					type: "error",
					detail: data.detail,
				};
			}
			setTokens(data);
			const user: any = jwtDecode(data.access);
			console.log("jwt decoded user", user);
			setUser({
				id: user.user_id,
				email: user.username,
				firstName: "NAME",
				lastName: "SURNAME",
			});
			return {
				type: "success",
				access: data.access,
				refresh: data.refresh,
			};
		} catch (e) {
			return {
				type: "error",
				detail: "Something went wrong. Try again.",
			};
		}
	};

	return useMutation((data: TLoginForm) => login(data), {});
};
