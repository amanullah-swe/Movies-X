import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import HomePage from "./pages/home/HomePage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>
  },
  {
    path: "about",
    element: <div>About</div>,
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
