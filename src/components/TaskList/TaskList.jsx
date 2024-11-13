import React from "react";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import AcceptTask from "./AcceptTask";

function TaskList({ data }) {
  console.log(data);
  return (
    <div
      id="tasklist"
      className="flex mt-10 h-[45%] overflow-x-auto items-center w-full justify-start gap-5 py-5 "
    >
      {data.tasks.map((ele, idx) => {
        console.log(ele.active);
        if (ele.active) return <AcceptTask key={idx} data={ele} />;
        if (ele.newTask) return <NewTask key={idx} data={ele} />;
        if (ele.completed) return <CompleteTask key={idx} data={ele}/>;
        if (ele.failed) return <FailedTask key={idx} data={ele} />;
      })}
    </div>
  );
}

export default TaskList;
