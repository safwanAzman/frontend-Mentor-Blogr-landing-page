import React, { useState, useRef } from "react";
import useOnClickOutside from "../hooks/useOnClickOutside";


function DropdownMobile(props) {

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
            <div className=" flex justify-center my-4">
                <button className={`${setActive} flex space-x-2 mt-2 items-center focus:outline-none`} onClick={toggleDropdown}>
                    <p className={setShow ?
                        'fontbody white font-bold text-center text-lg' : 'fontbody white font-bold text-center text-lg'}
                    >
                        {props.title}
                    </p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" className={`${setRotate}`}>
                        <path fill="none" stroke="#FF7B86" strokeWidth="2" d="M1 1l4 4 4-4" />
                    </svg>
                </button>
            </div>
            <div className="flex justify-center">
                <div
                    className={setShow ? ' bg-gray-200 py-4 px-5 rounded-lg shadow-lg text-center w-64' : 'hidden'}>
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default DropdownMobile;