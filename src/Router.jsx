import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App'
import Error from './Components/Error/Error'
import Home from './Pages/Home/Home'

const Router = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <App />,
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