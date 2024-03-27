import { useQuery } from "react-query";
import { axiosClient } from "../../util/axiosClient";

export const useExpense = (id: number | null) => {
	const getExpense = async () => {
		try {
			const { data } = await axiosClient.get<any>(`todos/expense/${id}`);
		} catch {}
	};
	return useQuery(["expense", id], getExpense, { enabled: !!id });
};
