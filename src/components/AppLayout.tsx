import React from 'react';
import Footer from './Footer';
import NavBar from './NavBar';

const AppLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <>
            <NavBar />
            <div
                style={{
                    marginTop: '120px',
                    transition: 'margin-top 0.2s ease-out',
                }}
            >

                {children}
            </div>
            <Footer />
        </>
    )
}

export default AppLayout;
