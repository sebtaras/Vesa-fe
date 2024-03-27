import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BiSolidHide } from "react-icons/bi";
import { FiEdit3 } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { useTheme } from "../hooks/useTheme";
import { useUser } from "../hooks/useUser";
import "../styles/expenses.css";
import "../styles/shared.css";
import "../styles/table.css";
import { dateYMDDashToDMYDot } from "../util/prettifyDate";

import ExpenseModal from "../components/ExpenseModal";
import Filter from "../components/Filter";
import { useExpenses } from "../hooks/api/useExpenses";

interface TExpense {
	id: number;
	amount: number;
	currency: string;
	date: string;
	note: string | null;
	category: string;
}

export type ModalMode = "" | "edit" | "delete" | "create";

const Expenses = () => {
	const navigate = useNavigate();
	const { user } = useUser();
	const { theme } = useTheme();
	const [sliderValue, setSliderValue] = useState(100);
	const [selectedId, setSelectedId] = useState<number | null>(null);
	const [modalMode, setModalMode] = useState<ModalMode>("");
	const { data: expenses, isLoading: loadingExpenses } = useExpenses();

	useEffect(() => {
		if (!user) {
			navigate("/login");
		}
	}, [user]);

	const headerStyle: React.CSSProperties = {
		// boxShadow: "0.5px 1px 1px 1px rgba(0, 0, 0, 0.25)",
		// borderBottom: "2px solid black",
		fontWeight: "normal",
		justifyContent: "center",
		backgroundColor: theme.primary,
		color: theme.text_on_dark,
		padding: "0.5rem 1rem 0.5rem 1rem",
		// padding: "0.5rem",
	};

	const bodyStyle: React.CSSProperties = {
		padding: "0.5rem 1rem 0.5rem 1rem",
		color: theme.text_on_light,
		borderBottom: `1px solid ${theme.primary}`,
	};

	return (
		<div>
			<Navbar />
			<div className="page-container">
				<ExpenseModal
					modalMode={modalMode}
					setModalMode={setModalMode}
					selectedId={selectedId}
					setSelectedId={setSelectedId}
				/>
				<div className="card flex justify-content-center"></div>
				<div
					className="button-container"
					style={{
						color: theme.text_on_dark,
						backgroundColor: theme.secondary,
					}}
					onClick={() => setModalMode("create")}
				>
					<AiOutlinePlus size={20} />
					<div className="expense-button">Add expense</div>
				</div>
				<Filter sliderValue={sliderValue} setSliderValue={setSliderValue} />
				{/* <div className="table-container"> */}
				<DataTable
					value={expenses ? expenses : []}
					stripedRows
					tableStyle={{
						minWidth: "50rem",
						border: `2px solid ${theme.primary}`,
						borderRadius: "20px",
						marginTop: "0.5rem",
					}}
					// paginator
					rows={10}
					// rowsPerPageOptions={[5, 10, 25, 50]}
				>
					<Column
						field="amount"
						header="Amount"
						bodyStyle={bodyStyle}
						headerStyle={headerStyle}
						alignHeader={"center"}
						body={(row: TExpense) => {
							return <p>{row.amount}</p>;
						}}
					></Column>
					<Column
						field="category.name"
						header="Category"
						bodyStyle={bodyStyle}
						headerStyle={headerStyle}
						alignHeader={"center"}
					></Column>
					<Column
						field="date"
						header="Date"
						bodyStyle={bodyStyle}
						headerStyle={headerStyle}
						alignHeader={"center"}
						body={(row: TExpense) => {
							return <p>{dateYMDDashToDMYDot(row.date)}</p>;
						}}
					></Column>
					<Column
						field="currency"
						header="Note"
						bodyStyle={bodyStyle}
						headerStyle={headerStyle}
						alignHeader={"center"}
						body={(row: TExpense) => {
							return (
								<div style={{}}>
									<p>{row.note}</p>
								</div>
							);
						}}
					></Column>
					<Column
						field="date"
						header="Actions"
						bodyStyle={bodyStyle}
						headerStyle={headerStyle}
						alignHeader={"center"}
						body={(row: TExpense) => {
							return (
								<div
									style={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
									}}
								>
									<button
										className="table-button"
										style={{
											backgroundColor: theme.secondary,
											marginRight: "1rem",
										}}
										onClick={() => {
											setSelectedId(row.id);
											setModalMode("edit");
										}}
									>
										<FiEdit3 color={theme.text_on_dark} size={16} />
										<p
											style={{ color: theme.text_on_dark }}
											className="table-button-text"
										>
											Edit
										</p>
									</button>
									<button
										className="table-button"
										style={{
											backgroundColor: theme.danger,
											marginRight: "1rem",
										}}
										onClick={() => {
											setSelectedId(row.id);
											setModalMode("delete");
										}}
									>
										<MdDelete color={theme.text_on_dark} size={18} />
										<p
											style={{ color: theme.text_on_dark }}
											className="table-button-text"
										>
											Delete
										</p>
									</button>
									<button
										className="table-button"
										style={{
											backgroundColor: theme.warn,
											marginRight: "1rem",
										}}
									>
										<BiSolidHide color={theme.text_on_dark} size={18} />
										<p
											style={{ color: theme.text_on_dark }}
											className="table-button-text"
										>
											Hide
										</p>
									</button>
								</div>
							);
						}}
					></Column>
					{/* <Column field="quantity" header="Quantity"></Column> */}
				</DataTable>
				{/* </div> */}
			</div>
		</div>
	);
};

export default Expenses;
