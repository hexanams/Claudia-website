"use client"
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { Button } from './ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from './ui/sheet'
import { usePathname } from 'next/navigation'


const NavBar = () => {
    const [open, setOpen] = useState(false)
    const pathname = usePathname()
    const linkStyle = (path: string) => pathname === path ? 'text-[#C7C2BE] pointer-cursor hover:underline' : 'text-[#131313] pointer-cursor hover:underline'

    return (
        <>
            <header className='h-[4.5rem] flex justify-center items-center px-5 lg:px-24 py-4 bg-white'>
                <div className='hidden lg:flex justify-between text-sm xl:text-base'>
                    <div className='flex gap-8 items-center'>
                        <Link className={linkStyle('/')} href='/'>Home</Link>
                        <Link className={linkStyle('/about')} href='/about'>About Us</Link>
                        <Link className={linkStyle('/issues')} href='/issues'>Issues we treat</Link>
                        <Link className={linkStyle('/services')} href='/services'>Therapeutic services</Link>
                    </div>
                    <div className='mx-20'>Image</div>
                    <div className='flex gap-8 items-center'>
                        <Link className={linkStyle('/price')} href='/price'>Price</Link>
                        <Link className={linkStyle('/booking')} href='/booking'>Book online</Link>
                        <Link className={linkStyle('/contact')} href='/contact'>Contact us</Link>
                        <Link className={linkStyle('/faqs')} href='/faqs'>FAQ</Link>
                        <Link className={linkStyle('/blogs')} href='/blogs'>Blogs</Link>
                    </div>
                </div>
                <div className='lg:hidden flex justify-between items-center w-full'>
                    <Link href={'/'} className='cursor-pointer'>Logo</Link>
                    <Button variant='ghost' className="bg-transparent" onClick={() => setOpen((prev) => !prev)}>
                        <Menu className='text-black' />
                    </Button>
                </div>

                <div className="grid grid-cols-2 gap-2">
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetContent side={'right'}>
                            <SheetHeader>
                                <SheetTitle>Logo</SheetTitle>
                            </SheetHeader>
                            <div className='flex flex-col gap-4 p-4 items-start text-[#131313]'>
                                <Link className='pointer-cursor hover:underline text-xl' href='/'>Home</Link>
                                <Link className='pointer-cursor hover:underline text-xl' href='/about'>About Us</Link>
                                <Link className='pointer-cursor hover:underline text-xl' href='/'>Issues we treat</Link>
                                <Link className='pointer-cursor hover:underline text-xl' href='/'>Threapeutic services</Link>

                                <Link className='pointer-cursor hover:underline text-xl' href='/'>Price</Link>
                                <Link className='pointer-cursor hover:underline text-xl' href='/booking'>Book online</Link>
                                <Link className='pointer-cursor hover:underline text-xl' href='/contact'>Contact us</Link>
                                <Link className='pointer-cursor hover:underline text-xl' href='/faqs'>FAQ</Link>
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