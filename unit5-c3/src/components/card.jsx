import { TotalContext} from "../contexts/TotalContext";
import { useContext } from "react";

export const Card= () => {
    const {handleChange} = useContext(TotalContext)

    return (
    <div
    style={{
    width: "200px",
    height: "300px",
    padding: "10px",
    background: "teal",
    }}>
    <button
       onClick={() => {
        handleChange(1);}}

    >Add to Cart</button>
    </div>
    );
    };