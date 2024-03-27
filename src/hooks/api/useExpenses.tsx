import { useQuery } from "react-query";
import { axiosClient } from "../../util/axiosClient";
import { TExpense } from "../../types/Types";

export const useExpenses = () => {
	const getExpenses = async () => {
		try {
			const { data } = await axiosClient.get<TExpense[]>("todos/expenses/");
			return data;
		} catch {}
	};

	return useQuery("expenses", getExpenses);
};
