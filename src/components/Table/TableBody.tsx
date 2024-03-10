import React from "react";
import { expenses } from "../../util/constants";
import TableRow from "./TableRow";

const TableBody = () => {
	return (
		<div>
			{expenses.map((expense, index) => {
				return <TableRow key={index} />;
			})}
		</div>
	);
};

export default TableBody;
