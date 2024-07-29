import React from 'react'
import { GiNotebook } from "react-icons/gi";
import { CiDark, CiLight } from "react-icons/ci";

const Navbar = ({ isMobileMenuOpen, toggleMobileMenu }) => {
  const [dark, setDark] = React.useState(false);

    const darkModeHandler = () => {
        setDark(!dark);
        document.body.classList.toggle("dark");
    }
  return (
  <nav className="bg-white shadow-lg dark:bg-blue-950 dark:text-white">
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex justify-between">
        <div className="flex space-x-4">
          <div>
            <a href="/" className="flex items-center py-5 px-2 text-gray-700">
              <img src="https://via.placeholder.com/50x50" alt="Logo" className="h-8 w-8 mr-2" />
              <span className="font-bold dark:text-white">CSIT Hub</span>
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <a href="/" className="py-5 px-3 text-gray-700 dark:text-white">Home</a>
            <div className="relative group">
              <button className="py-5 px-3 text-gray-700 inline-flex items-center dark:text-white">Semesters 
                <svg className="ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div className="absolute mt-[-1px] z-40 w-48 bg-white dark:bg-blue-950 rounded-md shadow-lg hidden group-hover:block">
                <a href="/first-semester/" className="flex gap-1 px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-white"><GiNotebook size={20} /> Semester I</a>
                <a href="/second-semester/" className="flex gap-1 px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-white"><GiNotebook size={20} /> Semester II</a>
                <a href="/third-semester/" className="flex gap-1 px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-white"><GiNotebook size={20} /> Semester III</a>
                <a href="/fourth-semester" className="flex gap-1 px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-white"><GiNotebook size={20} /> Semester IV</a>
                <a href="/fifth-semester/" className="flex gap-1 px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-white"><GiNotebook size={20} /> Semester V</a>
                <a href="/sixth-semester/" className="flex gap-1 px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-white"><GiNotebook size={20} /> Semester VI</a>
                <a href="/seventh-semester/" className="flex gap-1 px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-white"><GiNotebook size={20} /> Semester VII</a>
                <a href="/eighth-semester/" className="flex gap-1 px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-white"><GiNotebook size={20} /> Semester VIII</a>
              </div>
            </div>
            <a href="/" className="py-5 px-3 text-gray-700 dark:text-white">MCQ</a>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-1">
        <button onClick={()=> darkModeHandler()}>
      {
          
          dark && <CiLight size={24} /> // render sunny when dark is true
      }
      {
          !dark && <CiDark size={24} /> // render moon when dark is false
      }
 </button>
          <a href="/" className="py-5 px-3 text-gray-700 dark:text-white"><svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 21l2-2m0 0l2 2m-2-2v-8m0 8H7a2 2 0 01-2-2V7a2 2 0 012-2h3.5a2 2 0 011.837 1.153l1.364 3.273a2 2 0 001.896 1.217H21a2 2 0 012 2v8a2 2 0 01-2 2h-7.5a2 2 0 01-1.837-1.153L10 17m0 0l-2 2m2-2h.01"></path>
          </svg></a>
          <a href="/" className="py-2 px-4 bg-red-600 text-white rounded-lg hover:bg-red-500 transition duration-300">Sign up</a>
        </div>
        <div className="md:hidden flex items-center">
          <button className="mobile-menu-button" onClick={toggleMobileMenu}>
            <svg className="w-6 h-6 text-gray-700 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </nav>
)};

export default Navbar;
