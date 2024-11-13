import React from 'react';
import Header from '../others/Header';
import TaskList from '../TaskList/TaskList';
import TaskListBoxes from '../others/TaskListBoxes';

function EmployDashboard(props) {
    return (
        <div className='p-10 bg-[#1c1c1c] h-screen text-white'>
            {/* Header */}
            <Header changeUser={props.changeUser} data={props.data} user={"employee"} />
            
           {/* Main Content  */}
           <div className="flex flex-col space-y-8 mt-8">
                {/* TaskListBoxes */}
                <div className="bg-[#2e2e2e] p-6 rounded-lg shadow-lg">
                    <TaskListBoxes data={props.data} />
                </div>

                {/* TaskList  */}
                <div className="bg-[#2e2e2e] p-6 rounded-lg shadow-lg">
                    <TaskList data={props.data} />
                </div>
            </div>
        </div>
    );
}

export default EmployDashboard;
