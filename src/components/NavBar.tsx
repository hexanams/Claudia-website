"use client"
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { Button } from './ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from './ui/sheet'


const NavBar = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <header className='h-[4.5rem] flex justify-center items-center px-4 lg:px-24 py-4 bg-white'>
                <div className='hidden lg:flex justify-between text-sm xl:text-base'>
                    <div className='flex gap-8 items-center'>
                        <Link className='pointer-cursor hover:underline' href='/'>Home</Link>
                        <Link className='pointer-cursor hover:underline' href='/about'>About Us</Link>
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
                <div className='lg:hidden flex justify-between items-center w-full'>
                    <Link href={'/'} className='cursor-pointer'>Logo</Link>
                    <Button className="bg-gray-500" onClick={() => setOpen((prev) => !prev)}>
                        <Menu className='text-' />
                    </Button>
                </div>

                <div className="grid grid-cols-2 gap-2">
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetContent side={'right'}>
                            <SheetHeader>
                                <SheetTitle>Logo</SheetTitle>
                            </SheetHeader>
                            <div className='flex flex-col gap-4 p-2 items-center'>
                                <Link className='pointer-cursor hover:underline text-xl' href='/'>Home</Link>
                                <Link className='pointer-cursor hover:underline text-xl' href='/about'>About Us</Link>
                                <Link className='pointer-cursor hover:underline text-xl' href='/'>Issues we treat</Link>
                                <Link className='pointer-cursor hover:underline text-xl' href='/'>Threapeutic services</Link>

                                <Link className='pointer-cursor hover:underline text-xl' href='/'>Price</Link>
                                <Link className='pointer-cursor hover:underline text-xl' href='/'>Book online</Link>
                                <Link className='pointer-cursor hover:underline text-xl' href='/'>Contact us</Link>
                                <Link className='pointer-cursor hover:underline text-xl' href='/'>FAQ</Link>
                                <Link className='pointer-cursor hover:underline text-xl' href='/'>Blogs</Link>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </header>
        </>
    )
}

export default NavBar