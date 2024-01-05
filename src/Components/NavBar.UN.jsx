import logo from '../assets/img/opencartlogo.svg'
import { IoMenu } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from 'react';
import { Link , NavLink} from 'react-router-dom';

import Sidebar from './sidebar';


function NavBarUN() {

    const [open , setOpen] = useState(false)
    
    function toggleSidebar(){
        setOpen(!open)
    }


    return ( 
        <div className="w-full bg-black h-14 items-center mt-[-1px] flex justify-between fixed">
            { open && <Sidebar open={open} closeSidebar={toggleSidebar}/> }
            <div className="flex items-center">
                <IoMenu className="text-white mr-5 text-2xl ml-3 cursor-pointer " onClick={toggleSidebar} />
                <NavLink to="/">
                    <img className="w-28 ml-[-5px] " src={logo} alt="logo" />
                </NavLink>
            </div>

            <div className='flex'>
        <Link to="/login"> 
              <FaUserAlt className="text-white mr-5 text-2xl ml-3 cursor-pointer" />
        </Link>

                <FaShoppingCart className="text-white mr-5 text-2xl ml-3 cursor-pointer" />
            </div>
        </div>
     );
}

export default NavBarUN;