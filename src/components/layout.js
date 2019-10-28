import React from 'react';
//Bulma
import BulmaSection from 'react-bulma-components/lib/components/section';
//Components
import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => (
    <>
        <Header />
        {children}
        <Footer />
    </>
)

export default Layout