import React, { useEffect } from "react";
import { Flex, Layout, Space, Table as AntdTable, TableProps, Tag, Button } from "antd";
import Table from "../components/Table/Table";
import Navbar from "../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";
import "../styles/expenses.css";
import "../styles/table.css";
import "../styles/shared.css";
import { useTheme } from "../hooks/useTheme";
import { prettifyDate } from "../util/prettifyDate";
import { AiOutlinePlus } from "react-icons/ai";

const { Content } = Layout;

interface DataType {
	key: string;
	amount: number;
	currency: string;
	date: Date;
}

const columns: TableProps<DataType>["columns"] = [
	{
		title: "Amount",
		dataIndex: "amount",
		key: "amount",
	},
	{
		title: "Currency",
		dataIndex: "currency",
		key: "age",
	},
	{
		title: "Date",
		dataIndex: "date",
		key: "date",
		render: (_, record) => {
			prettifyDate(record.date);
			return <div>{prettifyDate(record.date)}</div>;
		},
	},

	{
		title: "Action",
		key: "action",
		render: (_, record) => (
			<Space size="middle">
				<a>Invite</a>
				<a>Delete</a>
			</Space>
		),
	},
];

const data: DataType[] = [
	{
		key: "1",
		amount: 20,
		currency: "EUR",
		date: new Date(Date.now()),
	},
];

const Expenses = () => {
	const navigate = useNavigate();
	const { user } = useUser();
	const { theme } = useTheme();

	useEffect(() => {
		if (!user) {
			navigate("/login");
		}
	}, [user]);

	return (
		<Layout>
			<Navbar />
			<div className="page-container">
				<Button
					className="add-button"
					icon={<AiOutlinePlus size={20} style={{ padding: 0, margin: 0 }} />}
					style={{
						color: theme.text_on_dark,
						backgroundColor: theme.primary,
						border: "none",
					}}
				>
					Add expense
				</Button>
				<div className="table-container">
					<div className="table">
						<AntdTable columns={columns} dataSource={data} />
					</div>
					<Table />
					<table className="table">
						<tr style={{ backgroundColor: theme.primary }}>
							<th style={{ padding: 10 }}>Company</th>
							<th style={{ padding: 10 }}>Contact</th>
							<th style={{ padding: 10 }}>Country</th>
						</tr>
						<tr className="table-row">
							<td>Alfreds Futterkiste</td>
							<td>Maria Anders</td>
							<td>Germany</td>
						</tr>
						<tr className="table-row">
							<td>Centro comercial Moctezuma</td>
							<td>Francisco Chang</td>
							<td>Mexico</td>
						</tr>
					</table>
				</div>
			</div>
		</Layout>
	);
};

export default Expenses;
