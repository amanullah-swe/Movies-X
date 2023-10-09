import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
// lazy Load
import React, { Suspense, lazy } from "react";
const HomePage = lazy(() => import("./pages/home/HomePage"));
const MoviePage = lazy(() => import("./pages/movie/MoviePage"));
const Discover = lazy(() => import("./pages/discover/Discover"));
const SearchResult = lazy(() => import('./pages/searchResult/SearchResult.jsx'));



const router = createBrowserRouter([
  {
    path: "/",
    element:
      <Suspense fallback={<div>Loading...</div>}>
        <HomePage></HomePage>
      </Suspense>
  },
  {
    path: "/:toogle/:movieId",
    element: <Suspense fallback={<div>Loading...</div>}>
      <MoviePage></MoviePage>
    </Suspense>,
  },
  {
    path: "/discover/:toogle",
    element: <Suspense fallback={<div>Loading...</div>}>
      <Discover />
    </Suspense>,
  },
  {
    path: "/search-result/",
    element: <Suspense fallback={<div>Loading...</div>}>
      <SearchResult />
    </Suspense>,
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
