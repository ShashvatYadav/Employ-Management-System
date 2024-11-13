import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

function CreateTask() {
    const [taskTitle, setTaskTitle] = useState("");
    const [taskDate, setTaskDate] = useState("");
    const [assignTo, setAssignTo] = useState("");
    const [taskCategory, setTaskCategory] = useState("");
    const [taskDescription, setTaskDescription] = useState("");

    const [newTask, setNewTask] = useState({});
    const [userData, setUserData] = useContext(AuthContext);

    const submitHandler = (e) => {
        e.preventDefault();
        setNewTask({
            taskTitle,
            taskCategory,
            taskDate,
            taskDescription,
            active: false,
            failed: false,
            newTask: true,
            completed: false,
        });

        const data = userData;
        data.employees.forEach((element) => {
            if (assignTo === element.firstName) {
                element.taskCounts.newTask = element.taskCounts.newTask + 1;
                element.tasks.push(newTask);
            }
        });

        setTaskTitle("");
        setTaskDate("");
        setAssignTo("");
        setTaskCategory("");
        setTaskDescription("");
    };

    return (
        <div className="bg-[#2e2e2e] rounded-lg p-6 shadow-lg">
            <form onSubmit={submitHandler} className="flex flex-wrap justify-between gap-4">
                <div className="w-full md:w-1/2">
                    <label className="text-[#ffffc7] font-semibold">Task Title</label>
                    <input
                        value={taskTitle}
                        onChange={(e) => setTaskTitle(e.target.value)}
                        className="w-full mb-4 border border-[#548687] rounded-lg px-4 py-2 bg-[#191913] text-white focus:outline-none focus:ring-2 focus:ring-[#548687]"
                        type="text"
                        placeholder="Make a UI design"
                    />
                    <label className="text-[#ffffc7] font-semibold">Date</label>
                    <input
                        value={taskDate}
                        onChange={(e) => setTaskDate(e.target.value)}
                        className="w-full mb-4 border border-[#548687] rounded-lg px-4 py-2 bg-[#191913] text-white focus:outline-none focus:ring-2 focus:ring-[#548687]"
                        type="date"
                    />
                    <label className="text-[#ffffc7] font-semibold">Assign to</label>
                    <input
                        value={assignTo}
                        onChange={(e) => setAssignTo(e.target.value)}
                        className="w-full mb-4 border border-[#548687] rounded-lg px-4 py-2 bg-[#191913] text-white focus:outline-none focus:ring-2 focus:ring-[#548687]"
                        type="text"
                        placeholder="Employee name"
                    />
                    <label className="text-[#ffffc7] font-semibold">Category</label>
                    <input
                        value={taskCategory}
                        onChange={(e) => setTaskCategory(e.target.value)}
                        className="w-full mb-4 border border-[#548687] rounded-lg px-4 py-2 bg-[#191913] text-white focus:outline-none focus:ring-2 focus:ring-[#548687]"
                        type="text"
                        placeholder="Design, dev, etc."
                    />
                </div>
                <div className="w-full md:w-1/2">
                    <label className="text-[#ffffc7] font-semibold">Description</label>
                    <textarea
                        value={taskDescription}
                        onChange={(e) => setTaskDescription(e.target.value)}
                        className="w-full h-32 border border-[#548687] rounded-lg p-4 bg-[#191913] text-white focus:outline-none focus:ring-2 focus:ring-[#548687]"
                        placeholder="Enter task description..."
                    />
                    <button className="w-full bg-[#548687] hover:bg-[#2e2e2e] text-white font-semibold py-3 rounded-lg mt-5 transition duration-200">
                        Create Task
                    </button>
                </div>
            </form>
        </div>
    );
}

export default CreateTask;



