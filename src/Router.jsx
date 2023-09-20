import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Pages/Home/Home'
import Error from './Components/Error/Error'

const Router = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home />,
            errorElement: <Error />
        },
    ])

    return <RouterProvider router={router} />;
}

export default Router