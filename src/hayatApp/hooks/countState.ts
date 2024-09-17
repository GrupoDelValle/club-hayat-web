import { useEffect, useState } from "react";


export const countState = ()=>{

    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevCount) => (prevCount === 5) ? 0 : prevCount + 1);
        }, 5500); 
        return () => clearInterval(interval);
    }, []);

    return { count };
}