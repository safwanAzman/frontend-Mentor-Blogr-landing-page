import React from 'react';
import img4 from '../img/illustration-laptop-desktop.svg';
export default function Section3() {

return (
    <div className="pt-6 lg:pb-52 lg:pt-24 px-8 overflow-x-hidden overflow-y-hidden">
        <div className="grid grid-cols-12 gap-1  relative">
            <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6 xxl:col-span-6 hidden lg:block ">
                <img src={img4} className="w-auto absolute -top-20 -left-52" style={{ height: '40rem' }} />
            </div>
            <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6 xxl:col-span-6 ">
                <div className="block lg:hidden">
                    <div className="flex justify-center">
                        <img src={img4} className="w-auto h-96" />
                    </div>
                </div>
                <div className="pb-12 text-center lg:text-left">
                    <h1 className="fontbody text-dark-blue-500 text-xl font-medium pb-6">Free, open, simple</h1>
                    <p className="text-gray-500 fontbody">
                        Blogr is a free and open source application backed by a large community of helpful developers.
                        It supports features such as code syntax highlighting, RSS feeds, social media integration,
                        third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean
                        and is
                        relatively easy to learn.
                    </p>
                </div>

                <div className="text-center lg:text-left">
                    <h1 className="fontbody text-dark-blue-500 text-xl font-medium pb-6">Robust content management</h1>
                    <p className="text-gray-500 fontbody">
                        Batteries included. We built a simple and straightforward CLI tool that makes customization and
                        deployment a breeze,
                        but capable of producing even the most complicated sites.
                    </p>
                </div>
            </div>
        </div>
    </div>
);

}