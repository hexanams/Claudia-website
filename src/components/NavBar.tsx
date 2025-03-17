"use client"
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Button } from './ui/button'
import { Sheet, SheetContent, SheetHeader } from './ui/sheet'


const NavBar = () => {
    const [open, setOpen] = useState(false)
    const pathname = usePathname()
    const linkStyle = (path: string) => pathname === path ? 'text-[#C7C2BE] pointer-cursor hover:underline' : 'text-[#131313] pointer-cursor hover:underline'

    return (
        <>
            <header className='h-[4.5rem] w-full flex justify-between items-center px-5 lg:px-11 xl:px-[100px] py-4 bg-white'>
                <div className='hidden lg:flex justify-between text-xs xl:text-base w-full'>
                    <div className='flex gap-8 items-center justify-between w-full'>
                        <Link className={`${linkStyle('/')} whitespace-nowrap`} href='/'>Home</Link>
                        <Link className={`${linkStyle('/about')} whitespace-nowrap`} href='/about'>About Us</Link>
                        <Link className={`${linkStyle('/issues')} whitespace-nowrap`} href='/issues'>Issues we treat</Link>
                        <Link className={`${linkStyle('/services')} whitespace-nowrap`} href='/therapeutic-services'>Therapeutic services</Link>
                    </div>
                    <Link href='/' className="w-full h-[4.5rem] flex justify-center items-center">
                        <Image
                            src='/logo.svg'
                            alt='logo'
                            width={220}
                            height={40}
                            priority
                            unoptimized
                        />
                    </Link>
                    <div className='flex gap-8 items-center justify-between w-full'>
                        <Link className={`${linkStyle('/price')} whitespace-nowrap`} href='/price'>Price</Link>
                        <Link className={`${linkStyle('/booking')} whitespace-nowrap`} href='/booking'>Book online</Link>
                        <Link className={`${linkStyle('/contact')} whitespace-nowrap`} href='/contact'>Contact us</Link>
                        <Link className={`${linkStyle('/faqs')} whitespace-nowrap`} href='/faqs'>FAQ</Link>
                        {/* <Link className={linkStyle('/blogs')} href='/blogs'>Blogs</Link> */}
                    </div>
                </div>

                <div className='lg:hidden flex justify-between items-center w-full'>
                    <Link href={'/'} className='cursor-pointer w-[100px] h-[20px] flex justify-center items-center'>
                        <Image
                            src='/logo.svg'
                            alt='logo'
                            width={100}
                            height={20}
                            priority
                            unoptimized
                        />
                    </Link>
                    <Button variant='ghost' className="bg-transparent" onClick={() => setOpen((prev) => !prev)}>
                        <Menu className='text-black' />
                    </Button>
                </div>

                <div className="grid grid-cols-2 gap-2">
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetContent side={'right'}>
                            <SheetHeader className='flex flex-row items-center justify-between px-5 lg:px-11 xl:px-[100px] py-4 h-[4.5rem]'>
                                <div className="w-[100px] h-[20px] flex justify-center items-center">
                                    <Image
                                        src='/logo.svg'
                                        alt='logo'
                                        width={100}
                                        height={20}
                                        priority
                                        unoptimized
                                    />
                                </div>
                                <Button variant='ghost' className="bg-transparent" onClick={() => setOpen((prev) => !prev)}>
                                    <X className='text-black' />
                                </Button>
                            </SheetHeader>
                            <div className='flex flex-col gap-4 p-4 px-7 items-start text-[#131313]'>
                                <Link className={`${linkStyle('/')} text-xl`} href='/'>Home</Link>
                                <Link className={`${linkStyle('/about')} text-xl`} href='/about'>About Us</Link>
                                <Link className={`${linkStyle('/issues')} text-xl`} href='/issues'>Issues we treat</Link>
                                <Link className={`${linkStyle('/therapeutic-services')} text-xl`} href='/therapeutic-services'>Threapeutic services</Link>
                                <Link className={`${linkStyle('/price')} text-xl`} href='/price'>Price</Link>
                                <Link className={`${linkStyle('/booking')} text-xl`} href='/booking'>Book online</Link>
                                <Link className={`${linkStyle('/contact')} text-xl`} href='/contact'>Contact us</Link>
                                <Link className={`${linkStyle('/faqs')} text-xl`} href='/faqs'>FAQ</Link>
                                {/* <Link className='pointer-cursor hover:underline text-xl' href='/'>Blogs</Link> */}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </header>
        </>
    )
}

export default NavBar