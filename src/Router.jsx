import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from './Root'
import Error from './Components/Error/Error'
import Home from './Pages/Home/Home'
import Shop from './Pages/Shop/Shop'
import Cart from './Pages/Cart/Cart'
import ItemDetail, {loader as itemsLoader } from "./Pages/ItemDetail/ItemDetail"


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
                {
                    path: 'shop',
                    element: <Shop />,
                }, 
                {
                    path: 'product/:name',
                    element: <ItemDetail />,
                    loader: itemsLoader,
                },
                {
                    path:'cart',
                    element: <Cart />
                },
            ]
        },
    ])

    return <RouterProvider router={router} />;
}

export default Router