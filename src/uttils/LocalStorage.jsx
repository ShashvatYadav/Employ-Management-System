
const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "a@p.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare Monthly Report",
        taskDescription: "Compile and analyze data for the monthly sales report.",
        taskDate: "2024-11-10",
        taskCategory: "Reporting",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update Client Database",
        taskDescription: "Verify and update client contact information.",
        taskDate: "2024-10-30",
        taskCategory: "Data Management",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Conduct Market Research",
        taskDescription: "Gather data on industry trends.",
        taskDate: "2024-11-01",
        taskCategory: "Research",
      },
    ],
    taskCounts: { active: 1, newTask: 1, completed: 1, failed: 1 },
  },
  {
    id: 2,
    firstName: "Vihaan",
    email: "bob.smith@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Organize Team Meeting",
        taskDescription: "Set up the weekly team meeting agenda.",
        taskDate: "2024-11-12",
        taskCategory: "Scheduling",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Review Project Proposal",
        taskDescription: "Evaluate the new project proposal draft.",
        taskDate: "2024-10-29",
        taskCategory: "Review",
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Client Follow-up",
        taskDescription: "Follow up with client on recent inquiries.",
        taskDate: "2024-11-11",
        taskCategory: "Client Communication",
      },
    ],
    taskCounts: { active: 1, newTask: 2, completed: 1, failed: 0 },
  },
  {
    id: 3,
    firstName: "Ishaan",
    email: "carol.williams@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Update Social Media Strategy",
        taskDescription: "Revise content strategy for social platforms.",
        taskDate: "2024-11-15",
        taskCategory: "Marketing",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Email Campaign Setup",
        taskDescription: "Prepare the holiday email campaign.",
        taskDate: "2024-10-25",
        taskCategory: "Marketing",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Website Content Update",
        taskDescription: "Revise outdated content on the website.",
        taskDate: "2024-10-28",
        taskCategory: "Content Management",
      },
    ],
    taskCounts: { active: 1, newTask: 1, completed: 1, failed: 1 },
  },
  {
    id: 4,
    firstName: "Krishna",
    email: "david.brown@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Develop Sales Presentation",
        taskDescription: "Create a presentation for the upcoming sales meeting.",
        taskDate: "2024-11-13",
        taskCategory: "Sales",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Client Feedback Analysis",
        taskDescription: "Analyze recent feedback from key clients.",
        taskDate: "2024-10-27",
        taskCategory: "Client Relations",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Budget Review",
        taskDescription: "Review the budget for potential adjustments.",
        taskDate: "2024-11-02",
        taskCategory: "Finance",
      },
    ],
    taskCounts: { active: 1, newTask: 1, completed: 1, failed: 1 },
  },
  {
    id: 5,
    firstName: "Nisha",
    email: "eve.davis@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Quality Assurance Testing",
        taskDescription: "Perform QA on the latest product release.",
        taskDate: "2024-11-14",
        taskCategory: "Testing",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Data Backup",
        taskDescription: "Complete system backup for data security.",
        taskDate: "2024-10-31",
        taskCategory: "IT",
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Vendor Communication",
        taskDescription: "Coordinate with vendors for product supplies.",
        taskDate: "2024-11-09",
        taskCategory: "Procurement",
      },
    ],
    taskCounts: { active: 1, newTask: 2, completed: 1, failed: 0 },
  },
];


const admin = [{
  id: 0,
  email: "admin@example.com",
  password: "123",
}]


export const setLocalStroge = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
}

export const getLocalStroge = () => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem("admin"));

    return {employees, admin};
}
