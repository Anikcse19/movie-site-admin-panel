import Layout from "../../components/shared/Layout/Layout";

const ImportMovie = () => {
  return (
    <Layout>

      {/* main body----> user list start*/}
      <div className="bg-white border-t-4 border-green-600 rounded-tl-lg rounded-tr-lg my-10  py-5">
        {/* heading start */}
        <div className="flex justify-between items-center shadow-lg px-5 py-5">
          <span className="text-xl font-bold ">Import list</span>
          <span className="bg-purple-600 px-5 py-2 rounded-lg text-white font-semibold shadow-lg">
           Add New
          </span>
        </div>
        {/* heading end */}

        {/* import related all buttons start */}
        <div className="px-3 w-[80%] flex flex-wrap md:flex-nowrap items-center justify-between gap-3 mt-5">
            <div className="bg-[#0BBDF1] text-white px-3 py-2 rounded-lg  shadow-lg cursor-pointer ">Restored Trashed</div>
            <div className="bg-red-600 text-white px-3 py-2 rounded-lg  shadow-lg cursor-pointer">Run Cron</div>
            <div className="bg-red-600 text-white px-3 py-2 rounded-lg  shadow-lg cursor-pointer">Clear All Queue</div>
            <div className="bg-red-600 text-white px-3 py-2 rounded-lg  shadow-lg cursor-pointer">Reset TMDB_&_IMDB</div>
            <div className="bg-red-600 text-white px-3 py-2 rounded-lg  shadow-lg cursor-pointer">Trash All</div>
        </div>
         {/* import related all buttons end */}
        

        {/* user list table start */}
        <div className="px-5 mt-10">
          {/* search and filter start */}
          <div className="flex flex-col md:flex-row gap-y-3 justify-between md:items-center">
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
                   Movie Details
                  </th>
                  <th scope="col" className="px-3 py-3 text-center border-r border-gray-500">
                  Poster
                  </th>
                  <th scope="col" className="px-3 py-3 text-center border-r border-gray-500">
                  IMDB || TMDB
                  </th>
                  <th scope="col" className="px-3 py-3 text-center border-r border-gray-500">
                   Updated At
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

export default ImportMovie;
