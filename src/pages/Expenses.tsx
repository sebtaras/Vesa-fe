import React, { useEffect } from "react";
import { Flex, Layout, Space, Table, TableProps, Tag } from "antd";
import Navbar from "../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";
import "../styles/expenses.css";
import { useTheme } from "../hooks/useTheme";

const { Content } = Layout;

interface DataType {
	key: string;
	name: string;
	age: number;
	address: string;
	tags: string[];
}

const columns: TableProps<DataType>["columns"] = [
	{
		title: "Name",
		dataIndex: "name",
		key: "name",
		render: (text) => <a>{text}</a>,
	},
	{
		title: "Age",
		dataIndex: "age",
		key: "age",
	},
	{
		title: "Address",
		dataIndex: "address",
		key: "address",
	},
	{
		title: "Tags",
		key: "tags",
		dataIndex: "tags",
		render: (_, { tags }) => (
			<>
				{tags.map((tag) => {
					let color = tag.length > 5 ? "geekblue" : "green";
					if (tag === "loser") {
						color = "volcano";
					}
					return (
						<Tag color={color} key={tag}>
							{tag.toUpperCase()}
						</Tag>
					);
				})}
			</>
		),
	},
	{
		title: "Action",
		key: "action",
		render: (_, record) => (
			<Space size="middle">
				<a>Invite {record.name}</a>
				<a>Delete</a>
			</Space>
		),
	},
];

const data: DataType[] = [
	{
		key: "1",
		name: "John Brown",
		age: 32,
		address: "New York No. 1 Lake Park",
		tags: ["nice", "developer"],
	},
	{
		key: "2",
		name: "Jim Green",
		age: 42,
		address: "London No. 1 Lake Park",
		tags: ["loser"],
	},
	{
		key: "3",
		name: "Joe Black",
		age: 32,
		address: "Sydney No. 1 Lake Park",
		tags: ["cool", "teacher"],
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
			<div className="table-container">
				<div className="table">
					<Table columns={columns} dataSource={data} />;
				</div>
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
		</Layout>
	);
};

export default Expenses;
