import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

function AllTask() {
    const [userData] = useContext(AuthContext);

    return (
        <div className="bg-white rounded-lg p-6 shadow-lg overflow-auto">
            <div className="bg-teal-500 mb-4 py-3 px-6 flex justify-between rounded-lg text-white font-semibold">
                <h2 className="w-1/5">Employee Name</h2>
                <h3 className="w-1/5">New Task</h3>
                <h5 className="w-1/5">Active Task</h5>
                <h5 className="w-1/5">Completed</h5>
                <h5 className="w-1/5">Failed</h5>
            </div>
            <div>
                {userData.employees.map((employee, idx) => (
                    <div key={idx} className="flex justify-between px-6 py-3 mb-3 rounded-lg shadow border border-gray-200">
                        <h2 className="w-1/5 font-medium text-gray-700">{employee.firstName}</h2>
                        <h3 className="w-1/5 font-medium text-yellow-600">{employee.taskCounts.newTask}</h3>
                        <h5 className="w-1/5 font-medium text-gray-700">{employee.taskCounts.active}</h5>
                        <h5 className="w-1/5 font-medium text-green-600">{employee.taskCounts.completed}</h5>
                        <h5 className="w-1/5 font-medium text-red-600">{employee.taskCounts.failed}</h5>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AllTask;
