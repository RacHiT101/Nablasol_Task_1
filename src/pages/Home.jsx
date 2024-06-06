// src/components/Home.js
import { useState } from "react";

const Home = ({goNext }) => {
  const [projectName, setProjectName] = useState("");
  const [client, setClient] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [notes, setNotes] = useState("");

  const clients = ["Client A", "Client B", "Client C"]; // Example clients list

  const handleSubmit = (e) => {
    e.preventDefault();
    const projectDetails = { projectName, client, startDate, endDate, notes };
    console.log(projectDetails);
    goNext();
  };

  return (
    <>
      <div className="flex h-screen justify-center items-center font-display">
        <form
          onSubmit={handleSubmit}
          className="rounded-lg shadow-gray shadow-xl p-4 w-full max-w-md"
        >
          <div className=" pb-2">
            <h2 className="text-xl font-semibold mb-4 flex justify-center">
              Create a Project
            </h2>

            <div className="mb-4">
              <label className="block">
                <span className=" after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                  Project Name
                </span>
                <input
                  required
                  type="text"
                  name="project-name"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder="Enter project name here"
                />
              </label>
            </div>

            <div className="mb-4">
              <label className="block">
                <span className=" after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                  Client
                </span>
                <div className="mt-2 flex items-center">
                  <select
                    required
                    name="client"
                    value={client}
                    placeholder="Select a client"
                    onChange={(e) => setClient(e.target.value)}
                    className="w-full rounded-md border-0 p-1 py-2 text-slate-600 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"
                  >
                    <option value="" className="">
                      Select a client
                    </option>
                    {clients.map((client, index) => (
                      <option key={index} value={client}>
                        {client}
                      </option>
                    ))}
                  </select>
                  <div className="mx-2 text-sm text-slate-600">Or</div>
                  <button
                    type="button"
                    className="whitespace-nowrap px-2 border-2 rounded-md py-1.5 text-sm text-slate-600"
                    onClick={() => setClient("New Client")}
                  >
                    New Client
                  </button>
                </div>
              </label>
            </div>

            <div className="mb-4 grid grid-cols-2 gap-4">
              <div>
                <label className="block">
                  <span className=" after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                    Start Date
                  </span>
                  <input
                    required
                    type="date"
                    name="start-date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  />
                </label>
              </div>
              <div>
                <label className="block">
                  <span className=" after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                    End Date
                  </span>
                  <input
                    required
                    type="date"
                    name="end-date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  />
                </label>
              </div>
            </div>

            <div className="">
              <label className="block">
                <span className="block text-sm font-medium text-slate-700">
                  Notes
                </span>
                <textarea
                  name="notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder="Optional"
                />
              </label>
            </div>
          </div>

          
            <div className="relative mt-2 flex justify-center">
            <button
              type="submit"
              className="rounded-md bg-[#3b8cf4] px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#3478c3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3b8cf4]"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Home;
