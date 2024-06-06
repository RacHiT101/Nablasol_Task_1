import { useState } from "react";
import { TfiLayoutListThumb } from "react-icons/tfi";
import PaginationDots from "./PaginationDots";

const SelectView = ({ goBack, goNext }) => {
  const [selectedView, setSelectedView] = useState("List");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected View:", selectedView);
    localStorage.setItem("selectedView", selectedView);
    goNext()
  };

  return (
    <div className="flex h-screen justify-center items-center font-display">
      <form
        onSubmit={handleSubmit}
        className="rounded-lg shadow-gray shadow-xl p-6 w-full max-w-md bg-white"
      >
        <div className="pb-2">
          <h2 className="text-xl font-semibold mb-4 flex justify-center">
            Select a view
          </h2>
          <h5 className="text-sm text-slate-600 flex mb-4 justify-center">
            You can also customize this views in settings
          </h5>
        </div>

        <div className="flex justify-center mb-48">
          <div
            onClick={() => setSelectedView("List")}
            className={`cursor-pointer w-full p-4 border rounded-lg ${
              selectedView === "List"
                ? "border-blue-600 bg-blue-50"
                : "border-gray-300 bg-white"
            } flex flex-col items-center mx-2`}
          >
            <TfiLayoutListThumb size={48} className="mb-2" />
            <span className="text-md font-semibold text-gray-700">List</span>
          </div>
          <div
            onClick={() => setSelectedView("Board")}
            className={`cursor-pointer w-full p-4 border rounded-lg ${
              selectedView === "Board"
                ? "border-blue-600 bg-blue-50"
                : "border-gray-300 bg-white"
            } flex flex-col items-center mx-2`}
          >
            <TfiLayoutListThumb size={48} className="mb-2" />
            <span className="text-md font-semibold text-gray-700">Board</span>
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

      <PaginationDots totalSteps={4} currentStep={2} />
      </form>
    </div>
  );
};

export default SelectView;
