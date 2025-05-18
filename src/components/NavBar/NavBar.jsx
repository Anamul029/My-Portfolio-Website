
const NavBar = () => {
    const navlinks = <>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skill">Skills</a></li>
        <li><a href="#project">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        {/* <a href="#main">Buy Tickets</a> */}
    </>
    return (
        <div className="fixed w-full mx-5/6  z-20 ">
            <div className="navbar font-serif w-full  bg-blue-50">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                           {navlinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">AN <span className="text-blue-600">A</span>M</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navlinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-yellow-200">HIRE ME</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;