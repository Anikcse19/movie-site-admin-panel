import { createBrowserRouter } from "react-router-dom";
import AddMovie from "../pages/AddMovie/AddMovie";
import AddtvShow from "../pages/AddTvShow/AddTvShow";
import AppUserList from "../pages/AppUserList/AppUserList";
import CloudFlareOneDrive from "../pages/CloudFlareOneDrive/CloudFlareOneDrive";
import CustomerRequest from "../pages/CustomerRequest/CustomerRequest";
import Dashboard from "../pages/Dashboard/Dashboard";
import DrivesManagers from "../pages/DrivesManager/DrivesManager";
import FileRename from "../pages/FileRename/FileRename";
import ImportMovie from "../pages/ImportMovie/ImportMovie";
import ImportTvShow from "../pages/ImportTvShow/ImportTvShow";
import Language from "../pages/Language/Language";
import MoviePrintType from "../pages/MoviePrintType.jsx/MoviePrintType";
import MoviesList from "../pages/MoviesList/MoviesList";
import NotOnline from "../pages/NotOnline/NotOnline";
import TrashedMovie from "../pages/TrashedMovie/TrashedMovie";
import TrashedTvShow from "../pages/TrashedTvShow/TrashedTvShow";
import TvShowList from "../pages/TvShowsList/TvShowList";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/addMovie",
    element: <AddMovie />,
  },
  {
    path: "/addTvShow",
    element: <AddtvShow />,
  },
  {
    path: "/appUserList",
    element: <AppUserList />,
  },
  {
    path: "/drivesManager",
    element: <DrivesManagers />,
  },
  {
    path: "/language",
    element: <Language />,
  },
  {
    path: "/notOnline",
    element: <NotOnline />,
  },
  {
    path: "/moviePrintType",
    element: <MoviePrintType />,
  },
  {
    path: "/fileRename",
    element: <FileRename />,
  },
  {
    path: "/moviesList",
    element: <MoviesList />,
  },
  {
    path: "/tvShowList",
    element: <TvShowList />,
  },
  {
    path: "/customerRequest",
    element: <CustomerRequest />,
  },
  {
    path: "/cloudFlareOneDrive",
    element: <CloudFlareOneDrive />,
  },
  {
    path: "/croneTaskAdmin/importMovie",
    element: <ImportMovie />,
  },
  {
    path:'/croneTaskAdmin/trashedMovie',
    element:<TrashedMovie/>
  },
  {
    path: "/croneTaskAdmin/importTvShow",
    element: <ImportTvShow />,
  },
  {
    path:'/croneTaskAdmin/trashedTvShow',
    element:<TrashedTvShow/>
  },
]);

export default routes;
