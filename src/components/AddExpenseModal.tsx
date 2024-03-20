import { Dialog } from "primereact/dialog";
import React from "react";
import { useForm } from "react-hook-form";
import { largeText } from "../util/constants";

interface Props {
	visible: boolean;
	setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddExpenseModal = ({ visible, setVisible }: Props) => {
	const { register, handleSubmit, getValues } = useForm();

	return (
		<Dialog style={{ padding: 0 }} visible={visible} onHide={() => setVisible(false)}>
			<form>
				<div
					style={{
						backgroundColor: "lightblue",
						width: "20%",
						display: "flex",
						flexDirection: "column",
					}}
				>
					<p style={{ fontSize: largeText, marginBottom: "0.75rem" }}>Amount</p>
					<input
						{...register("amount", {
							required: true,
						})}
						className="input"
						defaultValue=""
						placeholder="Amount"
					/>
					<div>alo</div>
					<div>alo</div>
				</div>
			</form>
		</Dialog>
	);
};

export default AddExpenseModal;
