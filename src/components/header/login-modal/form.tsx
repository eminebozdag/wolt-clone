import clsx from "clsx";
import React, {useState} from "react";
import Button from "../../button";
import Input from "../../input";

const Form = () => {
	const [val, setVal] = useState("");
	const [error, setError] = useState("");

	function isValidEmail(email: any) {
		return /\S+@\S+\.\S+/.test(email);
	}

	const handleChange = (cur: any) => {
		!isValidEmail(cur) ? setError("Please enter a valid email.") : setError("");
		setVal(cur);
	};

	const handleSubmit = (e: any) => {
		isValidEmail(val) && alert("success status");
		e.preventDefault();
	};

	return (
		<form className="flex flex-col mt-4" onSubmit={handleSubmit}>
			<Input label="Email" type="email" value={val} onChange={(e: any) => handleChange(e.target.value)} />

			{error && <span className={clsx("text-red-500 text-cxs font-light mx-4 mt-2", "transition duration-500 ease-in-out")}>{error}</span>}

			<Button hover variant="primary" className="justify-center mt-4 py-4">
				Next
			</Button>
		</form>
	);
};

export default Form;
