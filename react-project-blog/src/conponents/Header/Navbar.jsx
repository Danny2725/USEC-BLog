import { NavLink } from "react-router-dom";
import { FaFacebook,FaInstagram,FaGithub, FaBars, FaXmark } from "react-icons/fa6";
import { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import logo2 from '../../assets/LogoCLB/logo2.png';

export const Navbar = () => {
    const [isMenuOpen,setIsMenuOpen] = useState (false);
    const [isModalOpen,setIsModalOpen] = useState (false);
    const [isModalOpenSignUp,setIsModalOpenSignUp] = useState (false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    const navItems = [
        { path: "/", link: "Home" },
        { path: "/Member", link: "Member" },
        { path: "/about", link: "About" },
        { path: "/blogs", link: "Blogs" },
        { path: "/contact", link: "Contact" },
    ];

    // modal details
    const openModal = () => { 
        setIsModalOpen(true)
    }
    const closeModal = () => { 
        setIsModalOpen(false);
    }
    const openModalSignUp = () => { 
        setIsModalOpenSignUp(true)
    }
    const closeModalSignUp = () => { 
        setIsModalOpenSignUp(false);
    }
    return (
        <header className="bg-black text-white fixed top-0 left-0 right-0">
            <nav className="px-4 py-4 max-w-7xl mx-auto flex justify-between items-center">
                <div>
                <a href="/"  className="text-xl font-bold text-white" ><img className=" logoCLB m-0 p-0" src={logo2}></img></a>
                </div>
            {/* navItems for lg devices */}
            <ul className="md:flex gap-12 text-lg hidden">
                {
                    // eslint-disable-next-line react/jsx-key
                    navItems.map(({path,link})=> <li className="text-white">
                        <NavLink className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    } to={path}>{link}</NavLink>
                    </li>)
                }
            </ul>

            {/* menu icons */}
            <div className="text-white lg:flex gap-4 items-center hidden">
                <a href="/" className="hover:text-orange-400"><FaFacebook/> </a>
                <a href="/" className="hover:text-orange-400"><FaGithub /> </a>
                <a href="/" className="hover:text-orange-400"><FaInstagram /> </a>
                <button onClick={openModal} className="bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white
                 hover:text-orange-500 transition-all duration-200 ease-in">Log in</button>
                <button onClick={openModalSignUp} className="bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white
                 hover:text-orange-500 transition-all duration-200 ease-in">Sign up</button>
            </div>

            {/* <Modal isOpen={isModalOpen} onClose= {closeModal}/> */}
                <Login isOpen={isModalOpen} onClose= {closeModal}/>
                <SignUp isOpenSignUp={isModalOpenSignUp} onCloseSignUp= {closeModalSignUp}/>
            {/* mobile menu btn, display mobile screen*/}
            <div className="md:hidden">
                <button onClick={toggleMenu} className="cursor-pointer">
                {
                    isMenuOpen ? <FaXmark className="w-5 h-5" /> : <FaBars className="w-5 h-5"/>
                }
                </button>
            </div>
            </nav>

            {/* menu items only for mobile */}

            <div>
            <ul className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white ${isMenuOpen ? "fixed top-0 left-0 right-0 w-full transition-all ease-out duration-150" : "hidden"}`}>
                {
                    // eslint-disable-next-line react/jsx-key
                    navItems.map(({path,link})=> <li className="text-black">
                        <NavLink onClick={toggleMenu} to={path}>{link}</NavLink>
                    </li>)
                }
            </ul>
            </div>
        </header>
    );
};
