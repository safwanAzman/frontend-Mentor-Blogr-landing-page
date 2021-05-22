import React, { useState} from 'react';
import bg from '../img/bg-pattern-intro.svg';
import logo from '../img/logo.svg';
import HamburgerMenu from 'react-hamburger-menu';



import Dropdown from '../components/Dropdown';
import DropdownItem from '../components/DropdownItem';
import DropdownItemMobile from '../components/DropdownItemMobile';
import DropdownMobile from '../components/DropdownMobile';

export default function Header() {
    const [setActive, setActiveState] = useState(false);
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);

    function handleClick() {
        this.setState({
            open: !this.state.open
        });
    }

    return(

    <div className="bg-gradient-to-r from-light-red-400 to-light-red-500 boderblr">
        <div className="w-full relative  bg-auto bg-no-repeat bg-center boderblr bg-fixed z-50"
            style={{ height: '35rem', backgroundImage: 'url(' + bg + ')' }}>
            <div>
                <header className={colorChange ? 'fixed top-0 w-full py-4 px-8 md:px-16  bg-light-red-500 '
                    : ' py-8 px-8 md:px-16 transparent' }>
                    <div className="flex justify-between items-center">
                        <div className="flex space-x-10 items-center">
                            <img src={logo} className="w-24"/>
                            <div className="hidden sm:block">
                                <div className="flex space-x-10 items-center">
                                    <Dropdown title="Product">
                                        <DropdownItem title="Overview" route="#" />
                                        <DropdownItem title="Pricing" route="#" />
                                        <DropdownItem title="Marketplace" route="#" />
                                        <DropdownItem title="Features" route="#" />
                                        <DropdownItem title="Integrations" route="#" />
                                    </Dropdown>
                                    <Dropdown title="Company">
                                        <DropdownItem title="About" route="#" />
                                        <DropdownItem title="Team" route="#" />
                                        <DropdownItem title="Blog" route="#" />
                                        <DropdownItem title="Careers" route="#" />
                                    </Dropdown>
                                    <Dropdown title="Connect">
                                        <DropdownItem title="Contact" route="#" />
                                        <DropdownItem title="Newsletter" route="#" />
                                        <DropdownItem title="Linkedln" route="#" />
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                        <div className="hidden sm:block">
                            <div className="flex space-x-4">
                                <button className="focus:outline-none bg-transparent  text-white font-semibold py-2 px-4 rounded hover:text-gray-100">
                                    Login
                                </button>
                                <button
                                        className="focus:outline-none border-2 border-white bg-white hover:text-white hover:bg-light-red-300 text-light-red-300 font-bold py-2 px-4 rounded-full flex items-center justify-center w-32">
                                    Sign Up
                                </button>
                            </div>
                        </div>

                        {/* mobile menu */}
                        <div className="block sm:hidden">
                            <div className="">
                                    <HamburgerMenu
                                        isOpen={setActive}
                                        menuClicked={() => setActiveState(!setActive)}
                                        width={30}
                                        height={15}
                                        strokeWidth={2}
                                        rotate={0}
                                        color='white'
                                        borderRadius={0}
                                        animationDuration={0.5}
                                    />

                                    {setActive &&
                                        <div className="bg-white fixed top-24 right-4 left-4  shadow-2xl rounded-lg   py-4 px-4   " >
                                            <div>
                                                <DropdownMobile title="Product">
                                                    <DropdownItemMobile title="Overview" route="#" />
                                                    <DropdownItemMobile title="Pricing" route="#" />
                                                    <DropdownItemMobile title="Marketplace" route="#" />
                                                    <DropdownItemMobile title="Features" route="#" />
                                                    <DropdownItemMobile title="Integrations" route="#" />
                                                </DropdownMobile>
                                                <DropdownMobile title="Company">
                                                    <DropdownItemMobile title="About" route="#" />
                                                    <DropdownItemMobile title="Team" route="#" />
                                                    <DropdownItemMobile title="Blog" route="#" />
                                                    <DropdownItemMobile title="Careers" route="#" />
                                                </DropdownMobile>
                                                <DropdownMobile title="Connect">
                                                    <DropdownItemMobile title="Contact" route="#" />
                                                    <DropdownItemMobile title="Newsletter" route="#" />
                                                    <DropdownItemMobile title="Linkedln" route="#" />
                                                </DropdownMobile>
                                            </div>
                                            <div className="flex justify-center mt-10 border-t-2 py-4 ">
                                                <div>
                                                    <button
                                                        className="text-lg focus:outline-none mb-6 bg-white text-dark-blue-600 font-semibold py-2 px-4 rounded-full flex items-center justify-center w-32">
                                                        Login
                                                    </button>
                                                    <button
                                                        className="text-lg focus:outline-none bg-gradient-to-r from-light-red-400 to-light-red-500 text-white font-semibold py-3 px-4 rounded-full flex items-center justify-center w-32">
                                                        Sign Up
                                                </button>
                                                </div>
                                            </div>
                                        </div>
                                    }
                            </div>
                        </div>

                    </div>
                </header>
                <div className="py-12 md:py-24 px-4">
                    <div className="flex justify-center">
                        <h1 className="fontbody text-white text-4xl lg:text-6xl text-center">A modern publishing platform
                        </h1>
                    </div>
                    <div className="flex justify-center mt-4">
                        <h1 className="fontheader text-xl lg:text-lg text-gray-200 text-center font-medium">Grow your
                            audience and
                            build
                            your online brand
                        </h1>
                    </div>
                    <div className="flex space-x-4 justify-center mt-10">
                        <button
                            className="border-2 border-white bg-white hover:text-white hover:bg-light-red-300 text-light-red-300 font-bold py-2 px-4 rounded-full flex items-center justify-center w-42">
                            Start for Free
                        </button>
                        <button
                            className="bg-light-red-300  hover:text-light-red-300 hover:bg-white text-white font-bold py-2 px-4 rounded-full flex items-center justify-center w-42 border-2">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}