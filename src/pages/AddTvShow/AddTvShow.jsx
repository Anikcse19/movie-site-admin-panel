import { FaRegArrowAltCircleDown, FaRegArrowAltCircleUp } from "react-icons/fa";

import { IoIosRefresh } from "react-icons/io";
import Layout from "../../components/shared/Layout/Layout";


const AddtvShow = () => {
  return (
    <Layout>
      {/* add movie body */}
      <div className="flex flex-col gap-10">

        {/* drive add section start */}
        <div className="flex flex-wrap items-center gap-4 md:gap-0 md:justify-between ">
          <div className="flex flex-col">
            <span>
              Google Drive 1 <span className="text-red-500">*</span>
            </span>
            <span className="mt-2">
              <select className="w-full px-5 py-1 rounded-md" name="" id="">
                <option value="">Select</option>
              </select>
            </span>
          </div>
          <div className="flex flex-col">
            <span>
              Google Drive 2 <span className="text-red-500">*</span>
            </span>
            <span className="mt-2">
              <select className="w-full px-5 py-1 rounded-md" name="" id="">
                <option value="">Select</option>
              </select>
            </span>
          </div>
          <div className="flex flex-col">
            <span>
              One Drive 1 <span className="text-red-500">*</span>
            </span>
            <span className="mt-2">
              <select className="w-full px-5 py-1 rounded-md" name="" id="">
                <option value="">Select</option>
              </select>
            </span>
          </div>
          <div className="flex flex-col">
            <span>
              One Drive 2 <span className="text-red-500">*</span>
            </span>
            <span className="mt-2">
              <select className="w-full px-5 py-1 rounded-md" name="" id="">
                <option value="">Select</option>
              </select>
            </span>
          </div>
        </div>
        {/* drive add section start */}

        {/* Movie Script Generator start */}
        <div className="border-t-8 rounded-md border-green-600 bg-white px-5 py-5">
          {/* Title */}
          <div className="text-center">
            {" "}
            <h1>Movie Script Generator</h1>
          </div>

          <div className=" my-10 px-5">
            <span>TMDB or IMDB ID</span>
            <div className="flex flex-col md:flex-row items-center gap-5 my-2">
              <input
                className="border-2 border-gray-300 rounded-md"
                type="text"
              />
              <button className="bg-red-600 px-5 py-2 rounded-lg font-semibold text-white shadow-md self-start">
                Import
              </button>
            </div>
          </div>

          <div className="border border-green-600 flex flex-wrap lg:flex-nowrap justify-between items-center gap-3 rounded-to px-3 py-3 rounded-md">
            {/* field 1 */}
            <div className="w-[100%] md:w-[150%]">
              <span>Folder Name</span>
              <div className="relative mt-2">
                <input
                  className="px-3 w-full py-2 text-[14px] outline-none border border-gray-400 rounded-md"
                  type="text"
                  placeholder="Movie Folder Name"
                />
                <span className="bg-blue-500 text-white pl-6 pr-4 py-2 absolute right-0 top-[1px] rounded-tr-md rounded-br-md">
                  Check
                </span>
              </div>
            </div>
            {/* field 2*/}
            <div className="w-full flex flex-col ">
              <span>Audio Type</span>
              <input
                type="text"
                className="border border-gray-400 rounded-md py-2 px-3 mt-2"
              />
            </div>
            <div className=" w-full flex flex-col ">
              <span>Print Type</span>
              <input
                placeholder="ex: WEB-DL"
                type="text"
                className="border border-gray-400 rounded-md py-2 px-3 mt-2"
              />
            </div>
            <div className="w-full flex flex-col ">
              <span>POST-Category</span>
              <input
                type="text"
                className="border border-gray-400 rounded-md py-2 px-3 mt-2"
              />
            </div>
          </div>

           {/* go back and refresh button start */}
        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-10 my-10 px-3">
          <div className="flex items-center gap-3 bg-sky-400 px-5 py-1 rounded-lg cursor-pointer">
            <button>Go Bottom </button>
            <FaRegArrowAltCircleDown />
          </div>
          <div className="flex items-center gap-3 bg-sky-400  px-5 py-1 rounded-lg cursor-pointer">
            <button>Refresh </button>
            <IoIosRefresh />
          </div>
        </div>
        {/* go back and refresh button end */}


        {/* green input field start*/}

        <div className="flex flex-col gap-5 ">
            <div className="border border-green-500 py-5 px-2 rounded-lg"></div>
            <div className="border border-green-500 py-5 px-2 rounded-lg"></div>
            <div className="border border-green-500 py-5 px-2 rounded-lg"></div>
            <div className="border border-green-500 py-5 px-2 rounded-lg"></div>
            <div className="w-full text-center">
                <button className=" bg-green-500 px-12 py-3 rounded-md text-white font-bold">Submit</button>
            </div>
        </div>
          {/* green input field end*/}
          
          {/* go top button start */}
          <div className="my-5">
            <div className="flex gap-3 justify-center items-center bg-sky-400 px-5 py-1 w-[50%] md:w-[15%] rounded-lg cursor-pointer">
            <button>Go Top</button><FaRegArrowAltCircleUp/>
            </div>
          </div>
          {/* go to top button end */}
        </div>
        {/* Movie Script Generator end */}

       
      </div>
    </Layout>
  );
};

export default AddtvShow;
