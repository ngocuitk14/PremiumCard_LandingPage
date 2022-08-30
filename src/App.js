import { useEffect, useState } from 'react';
import './App.css';
import Content from './components/Content/Content';
import NavBar from './components/NavBar/NarBar';
import Slogan from './components/Slogan/Slogan';

function App() {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const handleSize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener('resize', handleSize);

        handleSize();
        return () => window.removeEventListener('resize', handleSize);
    }, []);
    useEffect(() => {
        if (windowSize.width < 500) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }, [windowSize]);
    return (
        <h1 className="font-sora overflow-y-auto overflow-x-hidden dark:text-white text-purple-900 text-13 h-screen px-4 py-8 bg-gradient-to-b from-purple-100 to-purple-500 md:px-20 dark:from-purple-900 dark:to-purple-700">
            <NavBar isMobile={isMobile}/>
            <Slogan />
            <Content />
        </h1>
    );
}

export default App;
