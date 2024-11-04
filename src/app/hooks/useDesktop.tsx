import { useEffect, useState } from "react";

function useDesktop() {
    const isWindow = typeof window !== 'undefined';
    const mediaQuery = isWindow && window.matchMedia('(min-width: 768px)');
    const [desktop, setDesktop] = useState(isWindow && mediaQuery ? mediaQuery.matches : null);
  
    useEffect(() => {
        const matchMedia = mediaQuery;
        if (!isWindow || !matchMedia) return;
        matchMedia.onchange = ({ matches }) => {
            setDesktop(matches);
        };


        return () => {
            matchMedia.onchange = null
        }
    }, [mediaQuery]);
  
    return desktop;
  };
  
  export default useDesktop;