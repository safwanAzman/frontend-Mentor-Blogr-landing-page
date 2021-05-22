import React from 'react';
import logo from '../img/logo.svg';


export default function Footer() {

return (
    <div className="mt-16 bg-dark-gray-500 bodertlr py-8 px-4 md:px-16 w-full">
        <div className="flex justify-center md:justify-start">
            <div className="grid grid-cols-12 gap-0 md:gap-20 ">
                <div className="col-span-12 sm:col-span-12 md:col-span-3 lg:col-span-3 xxl:col-span-3 py-4">
                    <img src={logo} className="w-24"/>
                </div>
                <div className="col-span-12 sm:col-span-12 md:col-span-3 lg:col-span-3 xxl:col-span-3">
                    <h1 className="text-white font-medium py-3">Product</h1>
                    <a href="#" className="">
                        <p className="text-light-gray-300 text-sm pb-1">Overview</p>
                    </a>
                    <a href="#">
                        <p className="text-light-gray-300 text-sm pb-1">Pricing</p>
                    </a>
                    <a href="#">
                        <p className="text-light-gray-300 text-sm pb-1">Marketplace</p>
                    </a>
                    <a href="#">
                        <p className="text-light-gray-300 text-sm pb-1">Features</p>
                    </a>
                    <a href="#">
                        <p className="text-light-gray-300 text-sm pb-1">Integrations</p>
                    </a>
                </div>
                <div className="col-span-12 sm:col-span-12 md:col-span-3 lg:col-span-3 xxl:col-span-3 ">
                    <h1 className="text-white font-medium py-3">Company</h1>
                    <a href="#" className="">
                        <p className="text-light-gray-300 text-sm pb-1">About</p>
                    </a>
                    <a href="#">
                        <p className="text-light-gray-300 text-sm pb-1">Team</p>
                    </a>
                    <a href="#">
                        <p className="text-light-gray-300 text-sm pb-1">Blog</p>
                    </a>
                    <a href="#">
                        <p className="text-light-gray-300 text-sm pb-1">Careers</p>
                    </a>
                </div>
                <div className="col-span-12 sm:col-span-12 md:col-span-3 lg:col-span-3 xxl:col-span-3 ">
                    <h1 className="text-white font-medium py-3">Connect</h1>
                    <a href="#" className="">
                        <p className="text-light-gray-300 text-sm pb-1">Contact</p>
                    </a>
                    <a href="#">
                        <p className="text-light-gray-300 text-sm pb-1">Newsletter</p>
                    </a>
                    <a href="#">
                        <p className="text-light-gray-300 text-sm pb-1">LinkedIn</p>
                    </a>
                </div>
            </div>
        </div>
        <div className="flex justify-end mt-4 text-center">
            <p className="text-white text-sm">Challenge by
                <span> 
                    <a href="https://www.frontendmentor.io/solutions" className="text-light-red-400"> Frontend Mentor. </a>
                </span>
                Coded by 
                <span> 
                    <a href="https://portfolio-green-nu.vercel.app/" className="text-light-red-400"> SafwanAzman. </a>
                </span>
            </p>
        </div>
    </div>
);

}