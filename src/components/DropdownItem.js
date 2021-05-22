import React from "react";

function DropdownItem(props) {
    return(
        
        <a href={props.route} className="text-sm">
            <p className="pb-2 font-semibold text-gray-600 hover:text-gray-900 transform  hover:scale-105 transition duration-300">{props.title}</p>
        </a>
    );
}

export default DropdownItem;