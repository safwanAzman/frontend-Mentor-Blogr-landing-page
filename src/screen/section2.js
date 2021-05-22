import React from 'react';
import img3 from '../img/illustration-phones.svg';
import bg2 from '../img/bg-pattern-circles.svg';
export default function Section2() {

return (
    <div className="relative my-10 bg-gradient-to-r from-dark-blue-600 to-dark-blue-400 boderblr bodertlr"
        style={{ height: '24rem' }}>
        <div className=" bg-auto bg-no-repeat bg-left-bottom bg-gradient-to-r from-dark-blue-600 to-dark-blue-400 boderblr bodertlr relative"
            style={{ height: '24rem', backgroundImage: 'url(' + bg2 + ')', backgroundSize: '50rem' }}>
            <div className="block lg:hidden  absolute -top-32 left-12">
                <img src={img3} className="w-auto " style={{ height: '18rem' }} />
            </div>
            <div className="grid grid-cols-12 gap-1 py-14 px-8 ">
                <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 xxl:col-span-6">
                    <div className=" absolute -top-24 left-18 pb-12  hidden lg:block">
                        <img src={img3} className="w-auto " style={{ height: '37rem' }} />
                    </div>
                </div>
                <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 xxl:col-span-6 pt-24 lg:pt-12">
                    <div className="text-center lg:text-left">
                        <h1 className="fontbody text-white text-xl font-medium pb-4">State of art Infrastructure</h1>
                        <p className="text-white fontbody">
                            With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast
                            connectivity.
                            This ensures your site will load instantly, no matter where your readers are, keeping your site
                            competitive.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

}