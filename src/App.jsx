import React, { useContext, useEffect, useRef, useState } from "react"
import Login from "./components/Auth/Login"
import EmployDashboard from "./components/Dashboard/EmployDashboard"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import { getLocalStroge, setLocalStroge } from "./uttils/LocalStorage"
import { AuthContext } from "./context/AuthProvider"

const App = () => {

  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [userData, setUserData] = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');

    if(loggedInUser){
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, []);
  

  const handleLogin = (email, password) => {
    if(email == "admin@s.com" && password == 123){
      setUser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({role : "admin"}));
    }
    else if(userData){
      const employees = userData.employees.find((e) => email == e.email && password == e.password);
      if(employees){
        setUser('employees');
        setLoggedInUserData(employees)
        localStorage.setItem('loggedInUser', JSON.stringify({role : "employees", data: employees}));
      }
    }
    else {
      alert("Invalid Credentials")
    }
  }

  
 

  return (
    <>
      {user ? '' : <Login handleLogin = {handleLogin} />}
      {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : (user == 'employees' ? <EmployDashboard changeUser={setUser} data={loggedInUserData}/> : null)}
    </>
  )
}

export default App
