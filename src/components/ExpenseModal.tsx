import { Dialog } from "primereact/dialog";
import { Dropdown } from "primereact/dropdown";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useCategories } from "../hooks/api/useCategories";
import { useDeleteExpense } from "../hooks/api/useDeleteExpense";
import { useExpense } from "../hooks/api/useExpense";
import { usePostExpense } from "../hooks/api/usePostExpense";
import { useTheme } from "../hooks/useTheme";
import "../styles/expenses.css";
import { largeText } from "../util/constants";
import { ModalMode } from "../pages/Expenses";
import { MdDelete } from "react-icons/md";

export type TExpenseForm = {
	amount: string;
	category_id: number | null;
	note: string;
};

interface Props {
	modalMode: ModalMode;
	setModalMode: React.Dispatch<React.SetStateAction<ModalMode>>;
	selectedId: number | null;
	setSelectedId: React.Dispatch<React.SetStateAction<number | null>>;
}

const ExpenseModal = ({ modalMode, setModalMode, selectedId, setSelectedId }: Props) => {
	const [isHovered, setIsHovered] = useState(false);
	const { register, handleSubmit, getValues, control, reset } = useForm<TExpenseForm>();
	const { theme } = useTheme();
	const { data: categories, isLoading: loadingCategories } = useCategories("options");
	const { data: expense, isLoading: loadingExpense } = useExpense(selectedId);
	const { mutate: addExpense, isLoading: addingExpense } = usePostExpense();
	const { mutate: deleteExpense, isLoading: deletingExpense } =
		useDeleteExpense(selectedId);

	const buttonStyle: React.CSSProperties = {
		backgroundColor: isHovered
			? // ? `linear-gradient(60deg, ${theme.secondary} 20%, ${theme.primary} 80%)`
			  theme.secondary
			: theme.primary,
	};

	const onSubmit = (data: TExpenseForm) => {
		if (!selectedId) {
			addExpense(data);
		} else {
			//edit selected
		}
	};

	useEffect(() => {
		if (expense) {
			//setValue in form
		}
	}, [selectedId]);

	return (
		<Dialog
			style={{ padding: 0 }}
			visible={!!modalMode}
			onHide={() => {
				setModalMode("");
				reset();
				setSelectedId(null);
			}}
		>
			{modalMode === "edit" || modalMode === "create" ? (
				<form onSubmit={handleSubmit(onSubmit)}>
					<p style={{ fontSize: largeText, marginBottom: "0.75rem" }}>
						{selectedId ? "Edit" : "Add new"} expense
					</p>
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
							<p style={{ color: theme.text_on_dark }}>
								{selectedId ? "Edit" : "Create"}
							</p>
						</button>
					</div>
				</form>
			) : (
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
					}}
				>
					<p
						style={{
							fontSize: largeText,
							marginBottom: "0.5rem",
						}}
					>
						Delete expense?
					</p>
					<div
						style={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<button
							className="table-button"
							style={{
								backgroundColor: theme.danger,
								marginRight: "1rem",
							}}
							onClick={() => {
								deleteExpense();
								setModalMode("");
							}}
						>
							<MdDelete color={theme.text_on_dark} size={18} />
							<p style={{ color: theme.text_on_dark }} className="table-button-text">
								Delete
							</p>
						</button>
						<button
							className="table-button"
							style={{ backgroundColor: theme.grey }}
							onClick={() => setModalMode("")}
						>
							<p style={{ color: theme.text_on_dark }}>Cancel</p>
						</button>
					</div>
				</div>
			)}
		</Dialog>
	);
};

export default ExpenseModal;
