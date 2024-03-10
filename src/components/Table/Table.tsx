import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import "../../styles/table.css";

// type Column = {
//   name: string;
//   accessor: string;
// }

// interface ITable {
//   columns =
// }

const Table = () => {
	return (
		<div className="table-container">
			<TableHeader />
			<TableBody />
		</div>
	);
};

export default Table;
