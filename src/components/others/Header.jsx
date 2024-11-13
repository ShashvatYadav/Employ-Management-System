import React from "react";

const Header = (props) => {
    const logOut = () => {
        localStorage.setItem("loggedInUser", '');
        props.changeUser('');
    };
    return (
        <div className="flex justify-between items-center mt-6 mb-8 p-4 bg-[#548687] rounded-lg shadow-md">
            <div className="group">
                <h1 className="text-sm font-light text-[#ffffc7]">Hello</h1>
                <h2 className="text-2xl font-semibold text-[#ffffc7] group-hover:text-teal-500 transition duration-300 ease-in-out transform group-hover:scale-105">
                    {props.user == "employee" ? props.data.firstName : "Admin"} <span role="img" aria-label="wave">👋</span>
                </h2>
            </div>
            <button
                onClick={logOut}
                className="bg-[#db4f4f] hover:bg-[#b33a3a] text-white font-semibold px-5 py-2 rounded-full shadow transition duration-300 transform hover:scale-105 hover:rotate-3"
            >
                Log out
            </button>
        </div>
    );
};

export default Header;

