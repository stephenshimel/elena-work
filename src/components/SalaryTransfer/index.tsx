import React, { useState } from "react";

const SalaryTransfer = () => {
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
		<div>
			<form onSubmit={handleOnSubmit}>
				<div>
					<input type='number' placeholder='input salary here' />
				</div>
				<div>
					this is{" "}
					<select name='salaryType' id='salaryType'>
						<option value='base'>base salary</option>
						<option value='package'>package</option>
					</select>
				</div>
				<div>
					<input type='submit' />
				</div>

				<div>
					<p>
						The {resultType} salary is A${result.toFixed(2)}
					</p>
				</div>
			</form>
		</div>
	);
};

export default SalaryTransfer;
