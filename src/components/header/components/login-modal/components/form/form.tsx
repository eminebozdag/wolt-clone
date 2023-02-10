import Button from "../../../../../button/button";
const Form = () => {
  const emailInput = document.getElementById("email_input");
  const emailLabel = document.getElementById("email_label");

  return (
    <form className="flex flex-col mt-4">
      <div>
        <div className="relative w-full">
          <input
            id="email_input"
            className=" pt-5 z-50 pb-1 px-4 text-sm border-2 border-gray bg-transparent rounded-lg w-full  hover:border-blue focus:outline-none focus:border-2 focus:border-blue transition active:border-blue duration-300 ease-out"
            type="email"
            placeholder=" "
          />
          <label
            id="email_label"
            className="translate-y-[-0.5rem] text-xs absolute left-4 right-4 top-[0.8rem] text-gray/70 w-0 transition duration-120 ease-out"
          >
            Email
          </label>
        </div>
      </div>
      <Button className="bg-blue mt-4 rounded-lg py-4 font-semibold text-white hover:bg-blue/90">
        Next
      </Button>
    </form>
  );
};

export default Form;
