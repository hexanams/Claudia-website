import Link from 'next/link'
import React from 'react'


const NavBar = () => {
    return (
        <header className='hidden h-[4.5rem] lg:flex justify-center items-center px-24 py-4'>
            <div className='flex justify-between text-sm lg:text-base'>
                <div className='flex gap-8 items-center'>
                    <Link className='pointer-cursor hover:underline' href='/'>Home</Link>
                    <Link className='pointer-cursor hover:underline' href='/'>About Us</Link>
                    <Link className='pointer-cursor hover:underline' href='/'>Issues we treat</Link>
                    <Link className='pointer-cursor hover:underline' href='/'>Threapeutic services</Link>
                </div>
                <div className='mx-20'>Image</div>
                <div className='flex gap-8 items-center'>
                    <Link className='pointer-cursor hover:underline' href='/'>Price</Link>
                    <Link className='pointer-cursor hover:underline' href='/'>Book online</Link>
                    <Link className='pointer-cursor hover:underline' href='/'>Contact us</Link>
                    <Link className='pointer-cursor hover:underline' href='/'>FAQ</Link>
                    <Link className='pointer-cursor hover:underline' href='/'>Blogs</Link>
                </div>
            </div>
        </header>
    )
}

export default NavBar