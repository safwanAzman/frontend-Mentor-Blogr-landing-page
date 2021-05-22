import React, {useState, useRef} from "react";
import useOnClickOutside from "../hooks/useOnClickOutside";


function Dropdown(props) {

    const [setActive, setActiveState] = useState("");
    const [setShow, setShowState] = useState(false);
    const [setRotate, setRotateState] = useState("dropdown__icon");

    const sensitive = useRef()

    function toggleDropdown() {
        setActiveState(setActive === "" ? "active" : "");
        setShowState(
            setActive === "active" ? false : true
        );
        setRotateState(
            setActive === "active" ? "dropdown__icon" : "dropdown__icon rotate"
        );
    }

    useOnClickOutside(sensitive, () => {
        setActiveState("");
        setShowState(false);
        setRotateState("adropdown__icon");
    });

    
    return (
        <div className="relative" ref={sensitive}>
            <button className={`${setActive} flex space-x-2 mt-2 items-center focus:outline-none`} onClick={toggleDropdown}>
                <p className={setShow ? 
                    'fontbody white font-bold text-white hover:text-gray-100 border-b-2 border-gray-10' 
                    :'fontbody white font-bold text-white hover:text-gray-100 '}
                    >
                    {props.title}
                </p>
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" className={`${setRotate}`}>
                    <path fill="none" stroke="#FFF" strokeWidth="2" opacity=".75" d="M1 1l4 4 4-4" />
                </svg>
            </button>
            <div 
                className={setShow ? 'absolute top-10 bg-white py-5 px-5 rounded-lg shadow-2xl w-40 ' :'hidden'}>
                {props.children}
            </div>
        </div>
    );
}

export default Dropdown;