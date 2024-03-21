import { useMutation } from "react-query";
import { TLoginResult } from "../../types/Auth";
import { axiosClient } from "../../util/axiosClient";

export const useRefresh = () => {
	const refresh = async (token: string): Promise<TLoginResult> => {
		try {
			const { data } = await axiosClient.post<any>(`api/token/refresh/`, {
				refresh: token,
			});
			if (data.detail) {
				return {
					type: "error",
					detail: data.detail,
				};
			}
			return {
				type: "success",
				access: data.access,
				refresh: data.refresh,
			};
		} catch (e) {
			return {
				type: "error",
				detail: "Something went wrong.",
			};
		}
	};
	return useMutation((token: string) => refresh(token), {});
};
