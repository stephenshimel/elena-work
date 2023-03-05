import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import SalaryTransfer from "./components/SalaryTransfer";
import Header from "./components/Header";
import Commission from "./components/Commission";

const App = () => {
	const [activeIndex, setActiveIndex] = useState<number>(0);

	const items = [
		{
			label: "salary transfer",
			name: "salaryTransfer",
			component: <SalaryTransfer />,
		},
		{ label: "commission", name: "commission", component: <Commission /> },
	];
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />

				<Header
					items={items.map(item => ({
						label: item.label,
						name: item.name,
					}))}
					activeIndex={activeIndex}
					setActiveIndex={setActiveIndex}
				/>
				{items[activeIndex]?.component}
			</header>
		</div>
	);
};

export default App;
