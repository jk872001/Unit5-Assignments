import { createContext,useState } from "react";
 export const TotalContext = createContext();
 export const TotalContextProvider = ({children}) => {
    const [cart, setCart] = useState(1);
    const handleChange = (inc) => {
    setCart(cart + inc);
    };

return (
<TotalContext.Provider value={{cart,handleChange}}>
{children}
</TotalContext.Provider>
);
};
// Provider = Provides the value
// Consumer = Takes the value