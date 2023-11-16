import { NavLink } from "react-router-dom";
import { FaFacebook,FaInstagram,FaGithub } from "react-icons/fa6";
  
export const Navbar = () => {
    const navItems = [
        { path: "/", link: "Home" },
        { path: "/services", link: "Services" },
        { path: "/about", link: "About" },
        { path: "/blogs", link: "Blogs" },
        { path: "/contact", link: "Contact" },
    ];
    return (
        <header className="bg-black">
            <nav className="px-4 py-4">
                <a href="/" className="text-xl font-bold text-white" >Design<span className="text-orange-500">DK</span></a>
            {/* navItems link */}
            <ul className="md:flex gap-12 text-lg hidden">
                {
                    // eslint-disable-next-line react/jsx-key
                    navItems.map(({path,link})=> <li className="text-white">
                        <NavLink to={path}>{link}</NavLink>
                    </li>)
                }
            </ul>

            {/* menu icons */}
            <div className="text-white">
                <a href="/" className="hover:text-orange-400"><FaFacebook/> </a>
                <a href="/" className="hover:text-orange-400"><FaGithub /> </a>
                <a href="/" className="hover:text-orange-400"><FaInstagram /> </a>

            </div>
            </nav>
        </header>
    );
};
