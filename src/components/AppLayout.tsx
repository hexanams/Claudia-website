"use client"
import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import NavBar from './NavBar';

const AppLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    const [marginTop, setMarginTop] = useState(0); // Default

    useEffect(() => {
        const updateMargin = () => {
            setMarginTop(window.innerWidth <= 1024 ? 0 : 120);
        };

        updateMargin(); // Set on mount
        window.addEventListener("resize", updateMargin);

        return () => window.removeEventListener("resize", updateMargin);
    }, []);

    return (
        <>
            <NavBar />
            <div
                style={{
                    marginTop: `${marginTop}px`,
                    transition: "margin-top 0.2s ease-out",
                }}
            >
                {children}
            </div>
            <Footer />
        </>
    )
}

export default AppLayout;
