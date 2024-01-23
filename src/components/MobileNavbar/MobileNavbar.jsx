import { useContext, useState } from "react";
import { FaDatabase, FaLanguage, FaUsers } from "react-icons/fa";
import {
    FaHand,
    FaLink,
    FaPersonRunning,
    FaRegHardDrive,
} from "react-icons/fa6";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoLogOutOutline, IoVideocam } from "react-icons/io5";
import {
    MdDashboard,
    MdEditDocument
} from "react-icons/md";

import { useLocation, useNavigate } from "react-router-dom";
import { NavController } from "../../ContextApi/NavController";

const navItems = [
  {
    id: 1,
    title: "Dashboard",
    icon: MdDashboard,
    link: "/",
  },
  {
    id: 2,
    title: "Add Movie",
    icon: FaLink,
    link: "/addMovie",
  },
  {
    id: 3,
    title: "Add Tv Show",
    icon: FaLink,
    link: "/addTvShow",
  },
  {
    id: 4,
    title: "App User List",
    icon: FaUsers,
    link: "/appUserList",
  },
  {
    id: 5,
    title: "Drive Manager/List",
    icon: FaRegHardDrive,
    link: "/drivesManager",
  },
  {
    id: 6,
    title: "Language",
    icon: FaLanguage,
    link: "/language",
  },
  {
    id: 7,
    title: "Not Online/Available",
    icon: FaLanguage,
    link: "/notOnline",
  },
  {
    id: 8,
    title: "Movie Print type",
    icon: IoVideocam,
    link: "/moviePrintType",
  },
  {
    id: 9,
    title: "File Rename",
    icon: MdEditDocument,
    link: "/fileRename",
  },
  {
    id: 10,
    title: "Movie Post List",
    icon: FaDatabase,
    link: "/moviesList",
  },
  {
    id: 11,
    title: "TV Shows List",
    icon: FaDatabase,
    link: "/tvShowList",
  },
  {
    id: 12,
    title: "Customer Request",
    icon: FaHand,
    link: "/customerRequest",
  },
  {
    id: 13,
    title: "CloudFlare-Onedrive-Fault",
    icon: MdDashboard,
    link: "/cloudFlareOneDrive",
  },
  {
    id: 14,
    title: "Crone Task Admin",
    icon: FaPersonRunning,
    link: "/",
    subNav: [
      {
        id: 1,
        title: "Movie Import and Crone",
        link: "/croneTaskAdmin/importMovie",
      },
      {
        id: 2,
        title: "Movie Trashed List",
        link: "/croneTaskAdmin/trashedMovie",
      },
      {
        id: 3,
        title: "Tvshow Import and Crone",
        link: "/croneTaskAdmin/importTvShow",
      },
      {
        id: 4,
        title: "Tvshow Trashed List",
        link: "/croneTaskAdmin/trashedTvShow",
      },
    ],
  },
  {
    id: 15,
    title: "Log Out",
    icon: IoLogOutOutline,
    link: "/logOut",
  },
];

const MobileNavbar = () => {
  const [openSubNav, setOpenSubNav] = useState(false);
  const [activeButton, setActiveButton] = useState({
    value:null,staus:false
  });

  const {setIsExpand}=useContext(NavController)


  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  console.log(activeButton);

  return (
    <div className=" max-h-screen overflow-hidden overflow-y-auto flex flex-col gap-5 px-2 py-2">
      {/* floating logo start*/}
      <div className="flex items-center justify-between gap-3">
        <div className="w-8 h-8">
          <img className="w-full" src="/images/logo.png" alt="" />
        </div>
        <span className="text-blue-500 font-bold text-xl font-sans">
          Movies Hub
        </span>
      </div>
      {/* floating logo end*/}

      {/* static logo start */}
      <div className="w-full flex justify-center">
        <div className="w-36 ">
          <img className="w-full" src="/images/logo.png" alt="" />
        </div>
      </div>
      {/* static logo end */}

      {/* Navbar start */}
      <div className="flex flex-col gap-4 mt-5 mb-10">
        {
                navItems.map((nav,i)=>{
                    console.log(i)
                    return (
                        <>
                        <div onClick={()=>{
                            
                            if(nav?.id===14){
                                setActiveButton({
                                    value:nav.id,status:true
                                })
                                setIsExpand(false)
                                setOpenSubNav(!openSubNav)
                            }else{
                                setActiveButton({
                                    value:nav.id,status:true
                                })
                                setIsExpand(false)
                                navigate(`${nav?.link}`)
                            }
                        }} 

                        key={nav.id} className={
                            `flex gap-3 px-5 py-2  rounded-md items-center hover:bg-blue-200 cursor-pointer text-gray-500 ${activeButton.value === nav?.id ? "bg-gray-300 ":""}`
                        }>
                            <span className={`text-base ${nav?.id === activeButton.value  && "text-purple-800"}`}><nav.icon/></span>
                            <span className={`text-base ${nav?.id === activeButton.value && "text-purple-800"}`}>{nav?.title}</span>
                        </div>
                       <div className="px-2 transition duration-500 ease-out">
                       {
                          openSubNav &&  nav?.subNav && <div>
                                {
                                    nav?.subNav.map(sNav=>(
                                       <div onClick={()=>{
                                        navigate(`${sNav.link}`)
                                       }} key={sNav?.id} className="bg-gray-400 flex items-center gap-2  my-2 px-3 py-2 rounded-md cursor-pointer">
                                        <span className="text-xl"><IoIosArrowDroprightCircle/></span>
                                            <span>{sNav?.title}</span>
                                       </div> 
                                    ))
                                }
                            </div>
                        }
                       </div>
                            </>
                       
                    )
                })
            }

        
      </div>
      {/* Navbar end */}
    </div>
  );
};

export default MobileNavbar;
