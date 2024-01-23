import Layout from "../../components/shared/Layout/Layout";

const MoviesList = () => {
  return (
    <Layout>

      {/* main body----> user list start*/}
      <div className="bg-white border-t-4 border-green-600 rounded-tl-lg rounded-tr-lg my-10  py-5">
        {/* heading start */}
        <div className="flex justify-between items-center shadow-lg px-5 py-5">
          <span className="text-xl font-bold ">Movie List</span>
          <span className="bg-[#252E46] px-5 py-2 rounded-md text-white font-semibold shadow-lg">
         Telegram Notify
          </span>
        </div>
        {/* heading end */}

        {/* user list table start */}
        <div className="px-5 mt-10">
          {/* search and filter start */}
          <div className="w-full relative">
            <input type="text" className="w-full outline-none border border-gray-400 px-3 py-2 rounded-lg" placeholder="Search" />
            <span className="bg-purple-500 px-3 py-2 rounded-tr-lg rounded-br-lg absolute right-0 top-[1px]">Search</span>
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
                    Movie Name
                  </th>
                  <th scope="col" className="px-3 py-3 text-center border-r border-gray-500">
                  Year
                  </th>
                  <th scope="col" className="px-3 py-3 text-center border-r border-gray-500">
                   Audio
                  </th>
                  <th scope="col" className="px-3 py-3 text-center border-r border-gray-500">
                   Print
                  </th>
                  <th scope="col" className="px-3 py-3 text-center border-r border-gray-500">
                   Created At
                  </th>
                  <th scope="col" className="px-3 py-3 text-center border-r border-gray-500">
                   Update At
                  </th>
                  <th scope="col" className="px-3 py-3 text-center border-r border-gray-500">
                   User
                  </th>
                  <th scope="col" className="px-3 py-3 text-center border-r border-gray-500">
                   Action
                  </th>

                 
                </tr>
              </thead>
              <tbody className="w-full">
                {/* <tr className="border-b text-gray-700 text-sm">
                  <td className="text-center px-3 py-4 border-r border-gray-500">1</td>
                  <td className="text-center px-3 py-4 border-r border-gray-500">Anik</td>
               
                  <td className="text-center px-3 py-4 border-r border-gray-500">12-jan-2024</td>
                  <td className="text-center px-3 py-4 border-r border-gray-500">2 days ago</td>
                  
                 
                </tr> */}
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

export default MoviesList;
