import clsx from "clsx";
import Button from "components/button";
import Input from "components/input";
import React, {useState} from "react";

interface Props {
	onSubmit?(e: any): void;
}

const Form = (props: Props) => {
	const {onSubmit} = props;
	const [val, setVal] = useState("");
	const [error, setError] = useState("");

	function isValidEmail(email: any) {
		return /\S+@\S+\.\S+/.test(email);
	}

	const handleChange = (cur: any) => {
		!isValidEmail(cur) ? setError("Please enter a valid email.") : setError("");
		setVal(cur);
	};

	return (
		<form className="flex flex-col mt-4" onSubmit={(e: any) => onSubmit && onSubmit(val)} data-testid="form-component">
			<Input label="Email" type="email" value={val} onChange={(e: any) => handleChange(e.target.value)} />

			{error && (
				<span className={clsx("text-red-500 text-cxs font-light mx-4 mt-2", "transition duration-500 ease-in-out")} data-testid="error-span">
					{error}
				</span>
			)}

			<Button type="submit" hover variant="primary" className="justify-center mt-4 py-4">
				Next
			</Button>
		</form>
	);
};

export default Form;
