import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Outlet } from "react-router-dom";
import { useState } from 'react';


export default function Root() {
    const [cart, setCart] = useState([])
    
    function addToCart(item, qty) {
        const itemsToAdd = Array.from({ length: qty }, () => item);

        setCart([...cart, ...itemsToAdd]);
    }

    return (
        <>
            <Header 
                numItems={cart.length}
            />
            <Outlet 
                context={[addToCart]}
            />
            <Footer />
        </>
        )
}