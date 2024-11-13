import React from "react";

function AcceptTask({ data }) {
    console.log(data);
    return (
        <div className="flex-shrink-0 w-[350px] p-5 bg-[#2e2e2e] rounded-lg shadow-lg">
            <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 text-sm font-semibold text-white bg-[#548687] rounded-full">
                    {data.taskCategory}
                </span>
                <span className="text-sm text-[#ffffc7]">{data.taskDate}</span>
            </div>
            <h2 className="text-2xl font-bold text-[#ffffc7] mb-2">{data.taskTitle}</h2>
            <p className="text-sm text-[#ffffc7] mb-4">{data.taskDescription}</p>
            <div className="flex justify-between items-center">
                <button className="text-[#3f9c79] hover:text-[#2e7d60] font-semibold">
                    Mark as Completed
                </button>
                <button className="text-[#db4f4f] hover:text-[#b33a3a] font-semibold">
                    Mark as Failed
                </button>
            </div>
        </div>
    );
}

export default AcceptTask;

