import { Dialog } from "primereact/dialog";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { largeText } from "../util/constants";
import "../styles/expenses.css";
import { MdArrowDropDown } from "react-icons/md";
import { Dropdown } from "primereact/dropdown";
import { useTheme } from "../hooks/useTheme";
import { useCategories } from "../hooks/api/useCategories";
import { usePostExpense } from "../hooks/api/usePostExpense";

export type TExpenseForm = {
	amount: string;
	category_id: number | null;
	note: string;
};

interface Props {
	visible: boolean;
	setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const categories = ["Health", "Groceries", "Rent", "Toiletries"];

const ExpenseModal = ({ visible, setVisible }: Props) => {
	const [isHovered, setIsHovered] = useState(false);
	const { register, handleSubmit, getValues, control, reset } = useForm<TExpenseForm>();
	const { theme } = useTheme();
	const { data: categories, isLoading: loadingCategories } = useCategories("options");
	const { mutate: addExpense, isLoading: addingExpense } = usePostExpense();

	const buttonStyle: React.CSSProperties = {
		backgroundColor: isHovered
			? // ? `linear-gradient(60deg, ${theme.secondary} 20%, ${theme.primary} 80%)`
			  theme.secondary
			: theme.primary,
	};

	const onSubmit = (data: TExpenseForm) => {
		addExpense(data);
	};

	return (
		<Dialog
			style={{ padding: 0 }}
			visible={visible}
			onHide={() => {
				reset();
				setVisible(false);
			}}
		>
			<form onSubmit={handleSubmit(onSubmit)}>
				<p style={{ fontSize: largeText, marginBottom: "0.75rem" }}>Add new expense</p>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
					}}
				>
					<input
						{...register("amount", {
							required: true,
						})}
						type="decimal"
						className="input"
						defaultValue=""
						placeholder="Amount"
					/>
					<Controller
						control={control}
						name="category_id"
						render={({ field: { onChange, value } }) => (
							<Dropdown
								value={value}
								className="select"
								options={categories}
								placeholder="Category"
								color="lightgrey"
								onChange={onChange}
							/>
						)}
					/>

					<textarea
						{...register("note")}
						className="input"
						placeholder="Note?"
					></textarea>
				</div>
				<div style={{ display: "flex", justifyContent: "center" }}>
					<button
						className="confirm-expense-button"
						style={buttonStyle}
						onMouseEnter={() => setIsHovered(true)}
						onMouseLeave={() => setIsHovered(false)}
						disabled={addingExpense}
					>
						<p style={{ color: theme.text_on_dark }}>Create</p>
					</button>
				</div>
			</form>
		</Dialog>
	);
};

export default ExpenseModal;
