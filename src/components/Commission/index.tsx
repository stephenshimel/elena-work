import React, { useState } from "react";

const Commission = () => {
	const [result, setResult] = useState(0);

	const handleOnSubmit = (e: any) => {
		e.preventDefault();
		const moneyBilled = e.target[0].value;
		const threshold = e.target[1].value;
		if (moneyBilled <= threshold) {
			setResult(0);
			return;
		}
		if (moneyBilled <= 40000) {
			setResult((moneyBilled - threshold) * 0.2);
			return;
		}
		if (moneyBilled <= 70000) {
			setResult((40000 - threshold) * 0.2 + (moneyBilled - 40000) * 0.275);
			return;
		}
		if (moneyBilled <= 90000) {
			setResult(
				(40000 - threshold) * 0.2 + 30000 * 0.275 + (moneyBilled - 70000) * 0.35
			);
			return;
		}

		setResult(
			(40000 - threshold) * 0.2 +
				30000 * 0.275 +
				20000 * 0.35 +
				(moneyBilled - 90000) * 0.4
		);
	};
	return (
		<div>
			<form onSubmit={handleOnSubmit}>
				<div>
					<input type='number' placeholder='you have billed:' />
				</div>
				<div>
					<input type='number' placeholder='Your threshold is::' />
				</div>
				<div>
					<input type='submit' />
				</div>

				<div>
					<p>Your commission for the month is A${result.toFixed(2)}</p>
				</div>
			</form>
		</div>
	);
};

export default Commission;
