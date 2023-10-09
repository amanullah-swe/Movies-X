import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import MoviePage from "./pages/movie/MoviePage";
import Discover from "./pages/discover/Discover";
import SearchResult from './pages/searchResult/SearchResult.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>
  },
  {
    path: "/:toogle/:movieId",
    element: <MoviePage></MoviePage>,
  },
  {
    path: "/discover/:toogle",
    element: <Discover />,
  },
  {
    path: "/search-result/",
    element: <SearchResult />,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
