import React from "react";
import { Slider } from "primereact/slider";
import "../styles/table.css";
import { InputText } from "primereact/inputtext";

interface Props {
	sliderValue: number;
	setSliderValue: React.Dispatch<React.SetStateAction<number>>;
}

const Filter = ({ sliderValue, setSliderValue }: Props) => {
	return (
		<div className="filter-container">
			<p>Filter expenses</p>
			<div className="filter-options-container">
				{/* <Slider value={value} onChange={(e) => setValue(e.value)} /> */}
				<Slider
					step={0.5}
					// range
					min={0}
					max={100}
					value={sliderValue}
					onChange={(e) => {
						console.log(e.value);
						// setSliderValue(e.value)
					}}
					style={{ backgroundColor: "blue" }}
				/>

				<Slider
					value={sliderValue}
					// onChange={(e) => setValue(e.value)}
				/>
			</div>
		</div>
	);
};

export default Filter;
