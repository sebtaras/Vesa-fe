export const prettifyDate = (inputDate: Date | undefined | null) => {
	if (!(inputDate instanceof Date)) {
		console.error("Input must be a Date object");
		return "N/A";
	}

	const day = String(inputDate.getDate()).padStart(2, "0");
	const month = String(inputDate.getMonth() + 1).padStart(2, "0");
	const year = inputDate.getFullYear();

	const formattedDate = `${day}.${month}.${year}.`;

	return formattedDate;
};

export const dateYMDDashToDMYDot = (date: string) => {
	const parts = date.split("-");
	return parts.reverse().join(".");
};
