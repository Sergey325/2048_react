import { useEffect } from 'react';

const useLocalStorage = (key, value) =>
    useEffect(() => {
        // Save to local storage when component unmounts
        const cleanup = () => {
            localStorage.setItem(key, JSON.stringify(value));
        };

        window.addEventListener('beforeunload', cleanup);

        // Remove event listener when component unmounts
        return () => {
            window.removeEventListener('beforeunload', cleanup);
        };
    }, [key, value]);


export default useLocalStorage;