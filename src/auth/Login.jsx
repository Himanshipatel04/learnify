import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { ToastContainer, toast } from "react-toastify";
import { MdOutlineMail, MdOutlinePassword } from "react-icons/md";
import RegisterChoice from "./RegisterChoice";
import axios from "axios";
import useAdminStore from "../store/adminStore";

const Login = () => {
  const [email, setLoginEmail] = useState("");
  const [password, setLoginPass] = useState("");
  const [role, setRole] = useState("student");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const { setIsAdmin, setAdminData } = useAdminStore((state) => ({
    setIsAdmin: state.setIsAdmin,
    setAdminData: state.setAdminData,
  }));

  const login = async () => {
    if (password.length < 6) {
      toast.error("Password should at least have 6 characters!");
      return;
    }

    if (email === "") {
      toast.error("Email can't be empty!");
      return;
    }

    try {
      const res = await axios.post(
        `https://learnify-backend-wmjk.onrender.com/api/${role}/login`,
        { email, password },
        { withCredentials: true }
      );
      console.log(res.data);
      toast.success("Login Successful!");
      if (role === "admin") {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
      setTimeout(() => {
        navigate(role === "admin" ? "/adminhome" : "/");
        window.location.reload();
      }, 2000);
    } catch (error) {
      toast.error("Error logging in!");
      console.log(error, "from login page");
    }
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="h-fit flex items-center justify-center py-16 md:py-0 md:pt-16 px-4">
      <div
        style={{ boxShadow: "0px 0px 10px 0.5px gray" }}
        className="h-fit py-6 md:py-10 w-full sm:w-[400px] md:w-[500px] rounded-xl shadow-black flex items-center justify-center gap-2 md:gap-6 flex-col"
      >
        <p className="text-3xl md:text-4xl text-red-500 font-semibold">Login</p>
        <img src={logo} className="h-20 w-[250px] md:w-[300px] object-contain" alt="Logo" />
  
        <div className="flex w-full px-4 sm:px-8 flex-col items-center justify-center gap-6 mt-4">
          <div className="mb-4 space-x-1 items-center justify-center flex">
            <label className="mr-2 md:mr-4 font-semibold">Login as:</label>
            <button
              onClick={() => setRole("student")}
              className={`px-1 py-1 md:px-4 md:py-2 rounded ${
                role === "student"
                  ? "bg-blue-500 text-white font-semibold"
                  : "bg-gray-200 font-semibold text-blue-600"
              }`}
            >
              Student
            </button>
            <button
              onClick={() => setRole("mentor")}
              className={`px-1 py-1 md:px-4 md:py-2 rounded ${
                role === "mentor"
                  ? "bg-blue-500 text-white font-semibold"
                  : "bg-gray-200 font-semibold text-blue-600"
              }`}
            >
              Mentor
            </button>
            <button
              onClick={() => setRole("admin")}
              className={`px-1 py-1 md:px-4 md:py-2 rounded ${
                role === "admin"
                  ? "bg-blue-500 text-white font-semibold"
                  : "bg-gray-200 font-semibold text-blue-600"
              }`}
            >
              Admin
            </button>
          </div>
  
          <div className="relative w-full">
            <input
              className="shadow-inner shadow-red-700 rounded-xl h-12 w-full px-8 border-none outline-none"
              type="email"
              placeholder="Enter email"
              onChange={(e) => setLoginEmail(e.target.value)}
            />
            <MdOutlineMail className="absolute top-4 left-2 text-gray-500 font-bold" />
          </div>
  
          <div className="relative w-full">
            <input
              required
              className="shadow-inner shadow-red-700 rounded-xl h-12 w-full px-8 border-none outline-none"
              type="password"
              placeholder="Password"
              onChange={(e) => setLoginPass(e.target.value)}
            />
            <MdOutlinePassword className="absolute top-4 left-2 text-gray-500 font-bold" />
          </div>
  
          <button
            onClick={login}
            className="h-12 w-full outline-blue-600 text-white bg-blue-600 outline-2 outline shadow-blue-800 rounded-lg text-xl font-semibold mt-2 hover:bg-white hover:font-semibold hover:transition-all duration-700 hover:text-black"
          >
            Login
          </button>
        </div>
  
        <p className="tracking-wide pt-2">
          Don't have an account?{" "}
          <span
            onClick={openModal}
            className="cursor-pointer font-semibold underline hover:scale-95 hover:text-blue-800"
          >
            Click here!
          </span>
        </p>
      </div>
  
      <ToastContainer />
  
      {isModalOpen && (
        <RegisterChoice isOpen={isModalOpen} onClose={closeModal} />
      )}
    </div>
  );
  
};

export default Login;
