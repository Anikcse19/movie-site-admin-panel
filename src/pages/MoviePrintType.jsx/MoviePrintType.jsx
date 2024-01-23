import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import Layout from "../../components/shared/Layout/Layout";

const MoviePrintType = () => {
  return (
    <Layout>
      {/* add movie and tv show button start */}
      <div className="flex gap-10 items-center">
        <button className="bg-purple-600 px-5 py-2 rounded-md text-white font-semibold shadow-lg">
          Movie Add
        </button>
        <button className="bg-purple-600 px-5 py-2 rounded-md text-white font-semibold shadow-lg">
          {" "}
          Tv Show Add
        </button>
      </div>
      {/* add movie and tv show button end */}

      {/* main body----> user list start*/}
      <div className="bg-white border-t-4 border-green-600 rounded-tl-lg rounded-tr-lg my-10  py-5">
        {/* heading start */}
        <div className="flex justify-between items-center shadow-lg px-5 py-5">
          <span className="text-xl font-bold ">Movie Print Type</span>
          <span className="bg-purple-600 px-5 py-2 rounded-md text-white font-semibold shadow-lg">
            Add New
          </span>
        </div>
        {/* heading end */}

        {/* user list table start */}
        <div className="px-5 mt-10">
          {/* search and filter start */}
          <div className="flex flex-col md:flex-row gap-y-3 md:gap-0  justify-between md:items-center">
            <div className="flex gap-2">
              <span>Show</span>
              <select className="outline-none" name="" id="">
                <option value="">10</option>
                <option value="">20</option>
                <option value="">30</option>
              </select>
              <span>entries</span>
            </div>
            <div className="flex gap-2 items-center">
              <span>Serach</span>
              <input
                className="rounded border border-blue-500 outline-none px-3 py-1"
                type="text"
                name=""
                id=""
              />
            </div>
          </div>
          {/* search and filter end */}

          {/* table start */}
          <div className=" relative overflow-x-auto max-h-screen overflow-y-auto my-10 border border-gray-500">
            <table className="ease-in-out w-full text-sm text-left  text-white dark:text-gray-400 ">
              <thead className="sticky top-0 z-10 text-xs text-black uppercase border-b border-gray-500">
                <tr>
                  <th scope="col" className="px-3 py-3 text-center border-r border-gray-500">
                    #
                  </th>
                  <th scope="col" className="px-3 py-3 text-center border-r border-gray-500">
                    Name
                  </th>
                  <th scope="col" className="px-3 py-3 text-center border-r border-gray-500">
                   Created
                  </th>
                  <th scope="col" className="px-3 py-3 text-center border-r border-gray-500">
                   Modified
                  </th>
                  <th scope="col" className="px-3 py-3 text-center border-r border-gray-500">
                   Action
                  </th>
                 
                </tr>
              </thead>
              <tbody className="w-full">
                <tr className="border-b text-gray-700 text-sm">
                  <td className="text-center px-3 py-4 border-r border-gray-500">1</td>
                  <td className="text-center px-3 py-4 border-r border-gray-500">Anik</td>
               
                  <td className="text-center px-3 py-4 border-r border-gray-500">12-jan-2024</td>
                  <td className="text-center px-3 py-4 border-r border-gray-500">2 days ago</td>
                  <td className="px-3 py-4 flex justify-evenly items-center border-r border-gray-500">
                    <FaEdit className="text-xl text-green-600     cursor-pointer" />
                    <AiFillDelete className="text-xl text-red-600 cursor-pointer" />
                  </td>
                 
                </tr>
              </tbody>
            </table>
          </div>
          {/* table end */}
        </div>
        {/* user list table end */}
      </div>
      {/* main body----> user list end*/}
    </Layout>
  );
};

export default MoviePrintType;
