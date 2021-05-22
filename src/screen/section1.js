import React, { useState } from 'react';
import img2 from '../img/illustration-editor-desktop.svg';

export default function Section1() {

return(
    <div className="py-24 px-8 overflow-x-hidden overflow-y-hidden">
        <div className="flex justify-center">
            <h1 className="fontbody text-4xl text-dark-blue-500 font-medium text-center">Designed for the future</h1>
        </div>
        <div className="grid grid-cols-12 gap-1 py-12 lg:py-24 relative">
            <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6 xxl:col-span-6 pl-4 lg:pl-20">
                <div className="block lg:hidden">
                    <div className="flex justify-center pb-12">
                        <img src={img2} className="w-auto h-96" />
                    </div>
                </div>
                <div className="pb-12 text-center lg:text-left">
                    <h1 className="fontbody text-dark-blue-500 text-xl font-medium pb-6">Introducing an extensible editor
                    </h1>
                    <p className="text-gray-500 fontbody">
                        Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating
                        content.
                        The editor supports management of multiple blogs and allows easy manipulation of embeds such as
                        images,
                        videos, and Markdown.
                        Extensibility with plugins and themes provide easy ways to add functionality or change the looks of
                        a blog.
                    </p>
                </div>

                <div className="text-center lg:text-left">
                    <h1 className="fontbody text-dark-blue-500 text-xl font-medium pb-6">Robust content management</h1>
                    <p className="text-gray-500 fontbody">
                        Flexible content management enables users to easily move through posts. Increase the usability
                        of your blog by adding customized categories, sections, format, or flow. With this functionality,
                        you’re in full control.
                    </p>
                </div>

            </div>
            <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6 xxl:col-span-6 hidden lg:block">
                <img src={img2} className="w-auto absolute -top-20 -right-52" style={{ height: '40rem' }} />
            </div>
        </div>
    </div>
);

}