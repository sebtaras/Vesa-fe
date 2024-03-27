export type TCategory = {
	id: number;
	name: string;
};

export type TExpense = {
	id: number;
	amount: string;
	note: string;
	category: TCategory;
};
