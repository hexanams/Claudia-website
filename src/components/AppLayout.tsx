"use client"
import React, { useState } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

const AppLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    const [headerHeight, setHeaderHeight] = useState(120);

    return (
        <>
            <NavBar onHeightChange={setHeaderHeight} />
            <div
                style={{
                    marginTop: typeof window !== "undefined" && window.innerWidth >= 1024 ? `${headerHeight}px` : '120px',
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
