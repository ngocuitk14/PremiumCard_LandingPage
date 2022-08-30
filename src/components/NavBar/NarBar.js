import { useState } from 'react';
import { BsSunFill } from 'react-icons/bs';
import { FaMoon } from 'react-icons/fa';
import { HiOutlineMenu } from 'react-icons/hi';
import { MdOutlineClose } from 'react-icons/md';
import useDarkMode from '../../hooks/useDarkMode';

const NavBar = (props) => {
    const { isMobile } = props;
    const [openMenu, setOpenMenu] = useState(false);
    const handleMenu = () => {
        setOpenMenu(!openMenu);
    };
    const [isDarkMode, toggleDarkMode] = useDarkMode();
    return (
        <>
            <nav className="flex items-center">
                <div className="flex items-center">
                    <div className="text-20 font-bold mr-2">Premium Card</div>
                    {isDarkMode ? (
                        <BsSunFill
                            size={'24px'}
                            color="#e9c46a"
                            className="cursor-pointer"
                            onClick={() => toggleDarkMode(!isDarkMode)}
                        />
                    ) : (
                        <FaMoon
                            size={'24px'}
                            color="#e9c46a"
                            className="cursor-pointer"
                            onClick={() => toggleDarkMode(!isDarkMode)}
                        />
                    )}
                </div>
                <ul className="md:flex md:gap-10 ml-auto text-16 font-semibold">
                    {openMenu && isMobile ? (
                        <MdOutlineClose
                            size={'24px'}
                            className="cursor-pointer"
                            onClick={handleMenu}
                        />
                    ) : !openMenu && isMobile ? (
                        <HiOutlineMenu
                            size={'24px'}
                            className="cursor-pointer"
                            onClick={handleMenu}
                        />
                    ) : (
                        <>
                            <li className="menu-item">Features</li>
                            <li className="menu-item">Menu</li>
                            <li className="menu-item">Our Story</li>
                            <li className="menu-item ml-20">Contact</li>
                        </>
                    )}
                    {openMenu && (
                        <div className="flex flex-col absolute right-8 bg-white text-center text-13 text-black rounded-md">
                            <li className="menu-item">Features</li>
                            <li className="menu-item">Menu</li>
                            <li className="menu-item">Our Story</li>
                            <li className="menu-item">Contact</li>
                        </div>
                    )}
                </ul>
            </nav>
        </>
    );
};

export default NavBar;
