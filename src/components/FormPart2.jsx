import { useState } from "react";
import PaginationDots from "./PaginationDots";

const FormPart2 = ({ goBack, goNext }) => {
  const [projectType, setProjectType] = useState("Time & Materials");
  const [projectHourlyRate, setProjectHourlyRate] = useState("");
  const [budgetReset, setBudgetReset] = useState(false);
  const [budget, setBudget] = useState(false);
  const [emailAlert, setEmailAlert] = useState(true);
  const [alertPercentage, setAlertPercentage] = useState(80);

  const handleSubmit = (e) => {
    e.preventDefault();
    const projectDetails = {
      projectType,
      projectHourlyRate,
      budget,
      budgetReset,
      emailAlert,
      alertPercentage,
    };
    console.log(projectDetails);

    // Save form data to local storage
    localStorage.setItem("formPart2Data", JSON.stringify(projectDetails));

    goNext();
  };

  const handleDropdownChange = (e) => {
    setProjectHourlyRate(e.target.value);
  };

  const handleInputChange = (e) => {
    setProjectHourlyRate(e.target.value);
  };

  return (
    <div className="flex h-screen justify-center items-center font-display">
      <form
        onSubmit={handleSubmit}
        className="rounded-lg shadow-gray shadow-xl p-4 w-full max-w-md"
      >
        <div className="pb-2">
          <h2 className="text-xl font-semibold mb-4 flex justify-center">
            Project type
          </h2>
          <h5 className="text-sm text-slate-600 flex mb-4 justify-center">
            Don’t panic — You can also customize this type in settings
          </h5>
        </div>

        <div className="mb-4">
          <div className="flex justify-center mb-6">
            <button
              type="button"
              onClick={() => setProjectType("Time & Materials")}
              className={`px-5 text-sm font-semibold py-1.5 rounded-md rounded-r-none ${
                projectType === "Time & Materials"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-500 border border-gray-300"
              }`}
            >
              Time & Materials
            </button>
            <button
              type="button"
              onClick={() => setProjectType("Fixed Fee")}
              className={`px-5 text-sm font-semibold py-1.5 ${
                projectType === "Fixed Fee"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-500 border border-gray-300"
              }`}
            >
              Fixed Fee
            </button>
            <button
              type="button"
              onClick={() => setProjectType("Non-Billable")}
              className={`px-5 text-sm font-semibold py-1.5 rounded-md rounded-l-none ${
                projectType === "Non-Billable"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-500 border border-gray-300"
              }`}
            >
              Non-Billable
            </button>
          </div>

          <div className="mb-4">
            {/* Hourly rate */}
            <label className="">
              <span className="block text-sm font-medium text-slate-700">
                Hourly
              </span>
              <h5 className="text-sm text-slate-600 mb-2">
                We need hourly rates to track the project's billable amount
              </h5>
              <div className="mt-4 flex gap-4">
                {/* Dropdown */}
                <select
                  name="hourlyRate"
                  value={projectHourlyRate}
                  onChange={handleDropdownChange}
                  className="w-1/2 rounded-md border-0 p-1 py-2 text-slate-600 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"
                >
                  <option value="">Select hourly rate</option>
                  <option value="₹10,000.00">₹10,000.00</option>
                  <option value="₹12,678.00">₹12,678.00</option>
                  <option value="₹15,000.00">₹15,000.00</option>
                </select>
                {/* Input */}
                <input
                  type="text"
                  value={projectHourlyRate}
                  onChange={handleInputChange}
                  className="w-1/4 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
                  placeholder="Enter hourly rate"
                />
              </div>
            </label>
          </div>

          <div className="mb-4">
            <label className="block">
              <span className="block text-sm font-medium text-slate-700">
                Budget
              </span>
              <select
                required
                name="budget"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-1/2 rounded-md border-0 p-1 py-2 text-slate-600 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"
              >
                {/* <option value="">Select budget type</option> */}
                <option value="Hours per Person">Hours per Person</option>
                <option value="Amount per Person">Amount per Person</option>
              </select>
            </label>
          </div>

          <div className="mb-2 flex items-center">
            <input
              id="budget-reset"
              type="checkbox"
              checked={budgetReset}
              onChange={(e) => setBudgetReset(e.target.checked)}
              className="h-4 w-4 text-sky-600 border-gray-300 rounded focus:ring-sky-500"
            />
            <label
              htmlFor="budget-reset"
              className="ml-2 block text-sm text-gray-900"
            >
              Budget resets every month
            </label>
          </div>

          <div className="flex items-center">
            <input
              id="email-alert"
              type="checkbox"
              checked={emailAlert}
              onChange={(e) => setEmailAlert(e.target.checked)}
              className="h-4 w-4 text-sky-600 border-gray-300 rounded focus:ring-sky-500"
            />
            <label
              htmlFor="email-alert"
              className="mx-2 whitespace-nowrap block text-sm text-gray-900"
            >
              Send email alerts if project exceeds
            </label>
            <input
              type="number"
              value={alertPercentage}
              onChange={(e) => setAlertPercentage(e.target.value)}
              className="w-1/6 px-2 py-1.5 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
            />
            <span className="ml-1 whitespace-nowrap block text-sm text-gray-900">
              % of budget
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-2">
          <button
            type="button"
            className="mx-2 text-md leading-6 text-slate-960"
            onClick={goBack}
          >
            Back
          </button>
          <div className="flex-grow" />
          <button
            type="submit"
            className="rounded-md bg-[#3b8cf4] px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#3478c3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3b8cf4]"
          >
            Next
          </button>
        </div>
      <PaginationDots totalSteps={4} currentStep={1} />
      </form>
    </div>
  );
};

export default FormPart2;
