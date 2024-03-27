import { useMutation, useQueryClient } from "react-query";
import { axiosClient } from "../../util/axiosClient";
import { TExpenseForm } from "../../components/ExpenseModal";

export const usePostExpense = () => {
	const queryClient = useQueryClient();

	const postExpense = async (values: TExpenseForm) => {
		console.log(values);
		try {
			const toSend: TExpenseForm = {
				amount: values.amount,
				note: values.note,
				category_id: values.category_id,
			};
			console.log("Sending object: ", toSend);
			const { data } = await axiosClient.post<any>("todos/expenses/", toSend);
		} catch {
			//baci toast
		}
	};

	return useMutation((data: TExpenseForm) => postExpense(data), {
		onSuccess: () => {
			queryClient.invalidateQueries("expenses"); //Tu cemo dodat filter keys
		},
	});
};
