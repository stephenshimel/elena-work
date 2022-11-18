import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
	const [result, setResult] = useState(0);
	const [resultType, setResultType] = useState("");

	const superRate = 0.105;
	const handleOnSubmit = (e: any) => {
		e.preventDefault();
		if (e.target[1].value === "package") {
			setResultType("base");
			setResult(e.target[0].value / (1 + superRate));
		} else {
			setResultType("package");
			setResult(e.target[0].value * (1 + superRate));
		}
	};
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<form onSubmit={handleOnSubmit}>
					<div>
						<input type='number' />
					</div>
					<div>
						<select name='salaryType' id='salaryType'>
							<option value='base'>base salary</option>
							<option value='package'>package</option>
						</select>
					</div>
					<br />

					<div>
						<input type='submit' />
					</div>
					<br />
					<br />

					<div>
						<p>
							The {resultType} salary is {result}
						</p>
					</div>
				</form>
			</header>
		</div>
	);
};

export default App;
