import { useQuery } from "react-query";
import { axiosClient } from "../../util/axiosClient";

type TCategory = {
	id: number;
	name: string;
};

//type: "list" | "options"
export const useCategories = (type: "options" | "list") => {
	const getCategories = async () => {
		try {
			const { data } = await axiosClient.get<TCategory[]>("todos/categories/");
			// if (type === "list") {
			if (type === "list") {
				return data;
			} else {
				return data.map((e) => {
					return { label: e.name, value: e.id };
				});
			}
			// }
			// return data.map((c) => {
			// });
		} catch {}
		return [];
	};

	return useQuery("categories", getCategories);
};
