import { useMutation, useQueryClient } from "react-query";
import { axiosClient } from "../../util/axiosClient";
import { TExpenseForm } from "../../components/ExpenseModal";

export const useEditExpense = () => {
	const queryClient = useQueryClient();

	const editExpense = async (values: TExpenseForm) => {
		console.log(values);
		try {
			const toSend: TExpenseForm = {
				amount: values.amount,
				note: values.note,
				category_id: null,
			};
			console.log("Sending object: ", toSend);
			const { data } = await axiosClient.put<any>("todos/expense/", toSend);
		} catch {
			//baci toast
		}
	};

	return useMutation((data: TExpenseForm) => editExpense(data), {
		onSuccess: () => {
			queryClient.invalidateQueries(["expenses"]); //Tu cemo dodat filter keys
		},
	});
};
