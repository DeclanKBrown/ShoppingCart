import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Outlet } from "react-router-dom";
import { useState } from 'react';


export default function Root() {
    const [cart, setCart] = useState([])
    
    function addToCart(item) {
        setCart([...cart, item])
    }

    return (
        <>
            <Header 
                numItems={cart.length}
            />
            <Outlet 
                addToCart={addToCart}
            />
            <Footer />
        </>
        )
}