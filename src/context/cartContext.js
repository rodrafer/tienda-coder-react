import { createContext, useState } from 'react';

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    
    // Pasar el setter setCart del useState no es buena práctica, mejor pasar una función que llame al setter
    const setItem = (item) => setCart([...cart, item])
    
    return (
        <CartContext.Provider value={{cart, setItem}}>
            {children}
        </CartContext.Provider>
    )
}
