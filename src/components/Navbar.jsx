import ThemeToggle from "./ThemeToggle";

function Navbar() {
    return (
        <div className="navbar bg-base-100  text-base-content shadow-xl ">
            <div className="flex-1 p-4 ">
                <h1 ><strong>Admin Dashboard</strong></h1>
            </div>
            <div className="flex">
                <ThemeToggle />
                
                <div className="dropdown dropdown-end mr-8 ml-8">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full shadow-xl">
                            <img
                                alt="admin"
                                src="image.jpeg" />
                        </div>
                    </div>
                   
                    <ul
                        tabIndex={0}
                        
                        className="menu menu-sm dropdown-content m-5 bg-white rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <a className="justify-between">
                                Profile
                                
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Navbar;