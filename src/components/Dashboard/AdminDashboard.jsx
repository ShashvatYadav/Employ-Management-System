import React from 'react';
import Header from '../others/Header';
import CreateTask from '../others/CreateTask';
import AllTask from '../others/AllTask';

function AdminDashboard(props) {
    return (
        <div className="min-h-screen w-full bg-[#191913] flex flex-col items-center p-8">
            <div className="w-full max-w-4xl bg-[#2e2e2e] p-8 rounded-2xl shadow-lg">
                {/* Header */}
                <Header changeUser={props.changeUser} user = {"admin"} />
                
                {/* Main Content */}
                <div className="mt-6">
                    <h2 className="text-2xl font-semibold text-[#ffffc7] mb-4">Admin Dashboard</h2>
                    <p className="text-[#ffffc7] mb-6">
                        Welcome back, Admin! Here you can create new tasks and manage all existing tasks.
                    </p>
                    
                    {/* Create Task */}
                    <div className="bg-[#191913] p-6 rounded-lg shadow-sm mb-6">
                        <h3 className="text-xl font-semibold text-[#ffffc7] mb-3">Create a New Task</h3>
                        <CreateTask />
                    </div>
                    
                    {/* All Tasks  */}
                    <div className="bg-[#191913] p-6 rounded-lg shadow-sm">
                        <h3 className="text-xl font-semibold text-[#ffffc7] mb-3">All Tasks</h3>
                        <AllTask />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;

