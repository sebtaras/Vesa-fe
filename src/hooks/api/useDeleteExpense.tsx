import { useMutation, useQueryClient } from "react-query";
import { axiosClient } from "../../util/axiosClient";

export const useDeleteExpense = (id: number | null) => {
	const queryClient = useQueryClient();
	const deleteExpense = async () => {
		try {
			const { data } = await axiosClient.delete(`todos/expense/${id}`);
		} catch {}
	};

	return useMutation(deleteExpense, {
		onSuccess: () => queryClient.refetchQueries(["expenses"]),
	});
};
