import React from "react";

function TaskListBoxes({ data }) {
    return (
        <div className="flex justify-between gap-5 mt-10">
            {[
                { count: data.taskCounts.newTask, label: "New Task", className: "bgColor: bg-[#548687], text-white rounded-lg" },
                { count: data.taskCounts.completed, label: "Completed Task",className: " bgColor: bg-[#191913]" },
                { count: data.taskCounts.failed, label: "Failed Task", bgColor: "bg-[#]" },
                { count: data.taskCounts.active, label: "Active Task", bgColor: "bg-[#2e2e2e]" }
            ].map((box, index) => (
                <div key={index} className={`${box.bgColor} flex-1 rounded-xl px-8 py-6 shadow-lg`}>
                    <h2 className="text-4xl font-bold text-white">{box.count}</h2>
                    <h3 className="text-xl font-medium text-white opacity-90">{box.label}</h3>
                </div>
            ))}
        </div>
    );
}

export default TaskListBoxes;


