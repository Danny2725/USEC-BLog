import { FaFacebook,FaInstagram,FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-gray-900">
        <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px4">
            <div className="grid  mb-8 lg:grid-cols-6">
                <div className="grid grid-cols-2 gap-5 lg:col-span-4 md:grid-cols-4">
                    <div>
                    <p className=" font-medium tracking-wide text-gray-300">Category</p>
                    <ul className="mt-2 space-y-2">
                        <li>
                            <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">News</a>
                        </li>
                        <li>
                            <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">World</a>
                        </li>
                        <li>
                            <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">Games</a>
                        </li>
                        <li>
                            <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">References</a>
                        </li>
                        
                    </ul>
                    </div>
                    {/* Category 2 */}
                    <div>
                    <p className=" font-medium tracking-wide text-gray-300">Games</p>
                    <ul className="mt-2 space-y-2">
                        <li>
                            <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">USEC</a>
                        </li>
                        <li>
                            <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">LOL</a>
                        </li>
                        <li>
                            <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">Valorant</a>
                        </li>
                        <li>
                            <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">TFT</a>
                        </li>
                        <li>
                            <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">FO4</a>
                        </li>
                    </ul>
                    </div>
                    {/* category 3 */}
                    <div>
                    <p className=" font-medium tracking-wide text-gray-300">Games</p>
                    <ul className="mt-2 space-y-2">
                        <li>
                            <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">USEC</a>
                        </li>
                        <li>
                            <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">LOL</a>
                        </li>
                        <li>
                            <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">Valorant</a>
                        </li>
                        <li>
                            <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">TFT</a>
                        </li>
                        <li>
                            <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">FO4</a>
                        </li>
                    </ul>
                    </div>
                    {/* category 4 */}
                    <div>
                    <p className=" font-medium tracking-wide text-gray-300">Games</p>
                    <ul className="mt-2 space-y-2">
                        <li>
                            <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">USEC</a>
                        </li>
                        <li>
                            <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">LOL</a>
                        </li>
                        <li>
                            <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">Valorant</a>
                        </li>
                        <li>
                            <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">TFT</a>
                        </li>
                        <li>
                            <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">FO4</a>
                        </li>
                    </ul>
                    </div>
                </div>
                {/* Sub */}
                    <div className="md:max-w-md lg:col-span-2 lg:mt-0 mt-5">
                    <p className=" font-medium tracking-wide text-gray-300">Subscribe for updates</p>
                    <form  className="mt-4 flex flex-col md:flex-row">
                        <input type="email" name="email" id="email" className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white
                        border border-gray-300 rounded shadow-sm  aspect-auto md:mr-2 md:mb-0 focus:border-purple-400 focus:outline-none">
                        </input>
                        <button type="submit" className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide
                        text-white transition duration-200 rounded shadow-sm hover:bg-orange-500  focus:outline-none border">
                        Subscribe
                        </button>
                    </form>
                    <p className="mt-4 text-sm text-gray-300">
            Yubico can now ship pre-registered security keys to its enterprise users Yubico can now ship pre-registered security keys to its enterprise users Yubico can now ship pre-registered security keys to its enterprise users
            </p>
                    </div>
            </div>

            <div className=" flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row">
                <p className="text-sm text-gray-500 ">© Copyright 2023 | All right  reserverd.</p>
                <div className="flex items-center mt-4 space-x-4 sm:mt-0">
                    <a href="" className="text-gray-500 transition-all duration-300 hover:text-orange-500"><FaFacebook className="h-6 w-6"/></a>
                    <a href="" className="text-gray-500 transition-all duration-300 hover:text-orange-500"><FaInstagram className="h-6 w-6"/></a>
                    <a href="" className="text-gray-500 transition-all duration-300 hover:text-orange-500"><FaGithub className="h-6 w-6"/></a>
                </div>
            </div>


        </div>
    </div>
  )
}

export default Footer