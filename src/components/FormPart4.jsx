import { useState, useEffect } from "react";
import PaginationDots from "./PaginationDots";

const FormPart4 = ({ goBack }) => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // Load tasks from localStorage on component mount
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (task.trim()) {
      const newTask = { text: task, completed: false };
      setTasks([...tasks, newTask]);
      setTask("");
    }
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = tasks.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    );
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="flex h-screen justify-center items-center font-display">
      <div className="rounded-lg shadow-gray shadow-xl p-6 w-full max-w-md bg-white">
        <div className="pb-2">
          <h2 className="text-xl font-semibold mb-4 flex justify-center">
            Tasks
          </h2>
        </div>
        <div className="mb-4 w-full">
          <label className="block">
            <span className="block mb-1 text-sm font-medium text-slate-700">
              Add a task
            </span>
            <div className="flex gap-4">
              <input
                required
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder="Add Task"
              />
              <button
                type="button"
                onClick={addTask}
                className="bg-[#3b8cf4] text-white text-sm rounded-md px-5"
              >
                Add
              </button>
            </div>
          </label>
        </div>
        <div className="mt-4 h-60 max-h-60 overflow-y-auto custom-scrollbar">
          <ul>
            {tasks.map((task, index) => (
              <li
                key={index}
                className="flex items-center justify-between gap-2 mb-2 border-b border-gray-300 pb-2"
              >
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTaskCompletion(index)}
                    className="cursor-pointer"
                  />
                  <span className={task.completed ? "line-through" : ""}>
                    {task.text}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => deleteTask(index)}
                  className="text-gray-500 mr-4"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
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
            Create Project
          </button>
        </div>
        <PaginationDots totalSteps={4} currentStep={3} />
      </div>
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
          margin-left: 4px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `}</style>
    </div>
  );
};

export default FormPart4;
