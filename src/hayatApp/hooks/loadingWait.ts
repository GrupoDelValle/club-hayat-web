import { useEffect, useState } from "react";

export const loadingScreenHook = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1500);
      }, []);

    return {isLoading};
}