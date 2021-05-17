import {useState,useEffect} from 'react'

function useWindowSize() {
  const [windowSize, setWindowSize] = useState(false);

useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 668) {
        setWindowSize(true);
      } else {
        setWindowSize(false);
      }
    }
    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.addEventListener('resize', handleResize);
  }, []);

    return windowSize
}

export default useWindowSize
