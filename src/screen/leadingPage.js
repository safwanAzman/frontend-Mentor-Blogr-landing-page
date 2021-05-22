import React  from 'react';
import Header from './header'
import Section1 from './section1'
import Section2 from './section2'
import Section3 from './section3'
import Footer from './footer'

export default function leadingPage() {
    return(
        <div>
            <Header />
            <Section1 />
            <Section2 />
            <Section3 />
            <Footer />
        </div>

    );
}