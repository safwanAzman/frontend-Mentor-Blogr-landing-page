import React from "react";

function DropdownItemMobile(props) {
    return (

        <a href={props.route} className="text-lg leading-9 z">
            <p className="pb-1 font-semibold text-gray-600 hover:text-gray-900 transform  hover:scale-105 transition duration-300">{props.title}</p>
        </a>
    );
}

export default DropdownItemMobile;