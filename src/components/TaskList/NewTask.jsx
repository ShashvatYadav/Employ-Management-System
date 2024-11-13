import React from "react";

function NewTask({ data }) {
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
            <div className="flex justify-start">
                <button onClick={()=>{
                    data.active=true
                    data.newTask = false
                }} className="px-4 py-2 text-white font-semibold bg-[#3f9c79] rounded-lg hover:bg-[#2e7d60] transition duration-200">
                    Accept
                </button>
            </div>
        </div>
    );
}

export default NewTask;


