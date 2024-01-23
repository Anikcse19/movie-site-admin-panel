/* eslint-disable react/prop-types */
import { TiThMenu } from "react-icons/ti";

import { useContext } from "react";
import { NavController } from "../../../ContextApi/NavController";
import MobileNavbar from "../../MobileNavbar/MobileNavbar";
import Sidebar from "../Sidebar/Sidebar";



const Layout = ({children}) => {

    const {isExpand,setIsExpand}=useContext(NavController)
    console.log(isExpand)
  return (
    <div className="flex relative">
        <div className="hidden md:block">
            <Sidebar/>
        </div>
        <div className="flex-grow bg-gray-200 min-h-screen px-4 md:px-12 py-12">
            <div onClick={()=>{
                setIsExpand(!isExpand)
            }} className="block md:hidden mb-10 text-2xl font-bold cursor-pointer">
                <TiThMenu/>
            </div>
            {
                isExpand && <MobileNavbar/>
            }
            <div className="flex h-full flex-col justify-between">

                {/* Main Body */}
                <div>{children}</div>


                {/* Footer */}
                <div className="flex flex-col md:flex-row justify-between items-center text-gray-600 pb-5">
                    <span>© 2024 , made with ❤️ by SIGN ME CODER</span>
                    <span>Support</span>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Layout
