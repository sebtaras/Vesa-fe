import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";
import "../styles/expenses.css";
import "../styles/table.css";
import "../styles/shared.css";
import { useTheme } from "../hooks/useTheme";
import { AiOutlinePlus } from "react-icons/ai";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { prettifyDate } from "../util/prettifyDate";
import { FiEdit3 } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { BiSolidHide } from "react-icons/bi";

import { Dialog } from "primereact/dialog";

import Filter from "../components/Filter";
import AddExpenseModal from "../components/AddExpenseModal";
import { Button } from "primereact/button";

interface DataType {
	amount: number;
	currency: string;
	date: Date;
	note: string | null;
	category: string;
}

const data: DataType[] = [
	{
		amount: 20.0,
		currency: "EUR",
		category: "Groceries",
		date: new Date(Date.now()),
		note: "This is an example of a note that someone would write",
	},
	{
		amount: 39.59,
		currency: "EUR",
		category: "Gym",
		date: new Date(Date.now()),
		note: "",
	},
	{
		amount: 2.19,
		currency: "EUR",
		category: "Transportation",
		date: new Date(Date.now()),
		note: "",
	},
	{
		amount: 108.32,
		currency: "EUR",
		category: "Rent",
		date: new Date(Date.now()),
		note: "",
	},
	{
		amount: 15.0,
		currency: "EUR",
		category: "Groceries",
		date: new Date(Date.now()),
		note: "",
	},
];

const Expenses = () => {
	const navigate = useNavigate();
	const { user } = useUser();
	const { theme } = useTheme();
	const [visible, setVisible] = useState(false);
	const [sliderValue, setSliderValue] = useState(100);

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
				<AddExpenseModal visible={visible} setVisible={setVisible} />
				<div className="card flex justify-content-center"></div>
				<div
					className="button-container"
					style={{
						color: theme.text_on_dark,
						backgroundColor: theme.secondary,
					}}
					onClick={() => setVisible(true)}
				>
					<AiOutlinePlus size={20} />
					<div className="expense-button">Add expense</div>
				</div>
				{/* <Filter sliderValue={sliderValue} setSliderValue={setSliderValue} /> */}
				{/* <div className="table-container"> */}
				<DataTable
					value={data}
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
						body={(row: DataType) => {
							return (
								<p>
									{row.amount} {row.currency}
								</p>
							);
						}}
					></Column>
					<Column
						field="category"
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
						body={(row: DataType) => {
							return <p>{prettifyDate(row.date)}</p>;
						}}
					></Column>
					<Column
						field="currency"
						header="Note"
						bodyStyle={bodyStyle}
						headerStyle={headerStyle}
						alignHeader={"center"}
						body={(row: DataType) => {
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
						body={(row: DataType) => {
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
