import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './Root'
import Error from './Components/Error/Error'
import Home from './Pages/Home/Home'

const Router = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Root />,
            errorElement: <Error />,
            children: [
                {
                index: true,
                element: <Home />,
                },
            ]
        },
    ])

    return <RouterProvider router={router} />;
}

export default Router