import React from 'react';

function CompleteTask({ data }) {
    return (
        <div className="flex-shrink-0 w-[350px] p-5 bg-[#333333] rounded-lg shadow-lg">
            <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 text-sm font-semibold text-white bg-[#548687] rounded-full">
                    {data.taskCategory}
                </span>
                <span className="text-sm text-[#ffffc7]">{data.taskDate}</span>
            </div>
            <h2 className="text-2xl font-bold text-[#ffffc7] mb-2">{data.taskTitle}</h2>
            <p className="text-sm text-[#ffffc7] mb-4">{data.taskDescription}</p>
            <div className="flex justify-start">
                <span className="px-4 py-2 text-white font-semibold bg-[#3b3b3b] rounded-lg shadow-md">
                    Completed
                </span>
            </div>
        </div>
    );
}

export default CompleteTask;

