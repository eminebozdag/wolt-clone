import clsx from "clsx";
import Button from "components/button";
import Input from "components/input";
import React, {useState} from "react";

const Form = () => {
	const [val, setVal] = useState("");
	const [message, setMessage] = useState({text: "", color: ""});

	function isValidEmail(email: any) {
		return /\S+@\S+\.\S+/.test(email);
	}

	const handleSubmit = (e: any) => {
		e.preventDefault();
		isValidEmail(val) && setMessage({text: "Please check your mailbox!", color: "text-green-500"});
		return false;
	};

	const handleChange = (cur: any) => {
		!isValidEmail(cur) ? setMessage({text: "Please enter a valid email.", color: "text-red-500"}) : setMessage({text: "", color: ""});
		setVal(cur);
	};

	return (
		<form className="flex flex-col mt-4" onSubmit={handleSubmit} data-testid="form-component">
			<Input label="Email" type="email" value={val} onChange={(e: any) => handleChange(e.target.value)} />

			{message && (
				<span className={clsx(`${message.color}`, "text-cxs font-light mx-4 mt-2", "transition duration-500 ease-in-out")} data-testid="message-span">
					{message.text}
				</span>
			)}

			<Button type="submit" hover variant="primary" className="justify-center mt-4 py-4">
				Next
			</Button>
		</form>
	);
};

export default Form;
