"use client"
import { Menu, X } from 'lucide-react'
import { motion, useScroll, useSpring, useTransform } from "motion/react"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { Sheet, SheetContent, SheetHeader } from './ui/sheet'

const NavBar = () => {
    const [open, setOpen] = useState(false)
    const pathname = usePathname()
    const linkStyle = (path: string) => pathname === path ? 'text-[#C7C2BE] pointer-cursor hover:underline' : 'text-[#6F6F6F] pointer-cursor hover:underline'

    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);

    // Define the range for scrollY to header height transformation
    const headerHeightRange = useTransform(scrollY, [0, 150], [120, 70]);
    const logoSizeRange = useTransform(scrollY, [0, 150], [220, 110]);
    const opacityRange = useTransform(scrollY, [0, 150], [1, 0.8]);

    // Apply spring animation to header height
    const headerHeight = useSpring(headerHeightRange, { stiffness: 250, damping: 25 });
    const logoSize = useSpring(logoSizeRange, { stiffness: 300, damping: 30 });
    const opacity = useSpring(opacityRange, { stiffness: 300, damping: 30 });


    useEffect(() => {
        setOpen(false);
    }, [pathname])

    // Update scroll state
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const staggeredLinkVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const linkVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 25,
            },
        },
    };


    return (
        <>
            <motion.header
                style={{
                    height: typeof window !== "undefined" && window.innerWidth >= 1024 ? headerHeight : 70,
                }}
                className={`fixed top-0 left-0 w-full flex justify-between items-center px-5 lg:px-11 xl:px-[100px] py-4 z-90 bg-white ${isScrolled ? "shadow-md" : ""} h-[70px]`}
            >



                <div className='hidden lg:flex justify-between items-center text-xs lg:text-sm w-full font-light'>
                    {/* Left Links */}
                    <div className='flex gap-8 items-center w-[40%] justify-start font-sweet-sans'>
                        <Link className={`${linkStyle('/')} whitespace-nowrap`} href='/'>Home</Link>
                        <Link className={`${linkStyle('/about')} whitespace-nowrap`} href='/about'>About Us</Link>
                        <Link className={`${linkStyle('/issues')} whitespace-nowrap`} href='/issues'>Issues we treat</Link>
                        <Link className={`${linkStyle('/services')} whitespace-nowrap`} href='/therapeutic-services'>Therapeutic services</Link>
                    </div>

                    {/* Logo */}
                    <motion.div className='flex justify-center items-center' style={{ width: logoSize, opacity }}>
                        <Link href='/'>
                            <Image
                                src='/logo-therapy.svg'
                                alt='logo'
                                width={200}
                                height={40}
                                priority
                                unoptimized
                                quality={100}
                            />
                        </Link>
                    </motion.div>

                    {/* Right Links */}
                    <div className='flex gap-8 items-center w-[40%] justify-end font-sweet-sans '>
                        <Link className={`${linkStyle('/price')} whitespace-nowrap`} href='/price'>Price</Link>
                        <Link className={`${linkStyle('/booking')} whitespace-nowrap`} href='/booking'>Book online</Link>
                        <Link className={`${linkStyle('/contact')} whitespace-nowrap`} href='/contact'>Contact us</Link>
                        <Link className={`${linkStyle('/faqs')} whitespace-nowrap`} href='/faqs'>FAQ</Link>
                    </div>
                </div>

                <div className='lg:hidden flex justify-between items-center w-full'>
                    <Link href={'/'} className='cursor-pointer w-[100px] h-[20px] flex justify-center items-center'>
                        <Image
                            src='/logo-therapy.svg'
                            alt='logo'
                            width={100}
                            height={20}
                            priority
                            unoptimized
                            quality={100}
                        />
                    </Link>
                    <Button variant='ghost'
                        className="bg-[#C99D85] rounded-none z-50 hover:bg-none"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <X className='text-black' />
                            : <Menu className='text-black' />}
                    </Button>
                </div>

                <div className="grid grid-cols-2 gap-2">
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetContent side={'right'}
                            className='bg-white'>
                            <SheetHeader
                                className='flex flex-row items-center justify-between pl-5 pr-7 lg:px-11 xl:px-[100px] py-4 h-[70px] lg:h-[120px]'>
                                <div />
                                <Button variant='ghost' className="bg-transparent relative" onClick={() => setOpen((prev) => !prev)}>
                                    <X className='text-black' />
                                </Button>
                            </SheetHeader>
                            <motion.div
                                className='flex flex-col gap-4 p-4 px-7 items-start text-[#131313]'
                                variants={staggeredLinkVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                <motion.div variants={linkVariants}>
                                    <Link className={`${linkStyle('/')} text-xl`} href='/'>Home</Link>
                                </motion.div>
                                <motion.div variants={linkVariants}>
                                    <Link className={`${linkStyle('/about')} text-xl`} href='/about'>About Us</Link>
                                </motion.div>
                                <motion.div variants={linkVariants}>
                                    <Link className={`${linkStyle('/issues')} text-xl`} href='/issues'>Issues we treat</Link>
                                </motion.div>
                                <motion.div variants={linkVariants}>
                                    <Link className={`${linkStyle('/therapeutic-services')} text-xl`} href='/therapeutic-services'>Therapeutic services</Link>
                                </motion.div>
                                <motion.div variants={linkVariants}>
                                    <Link className={`${linkStyle('/price')} text-xl`} href='/price'>Price</Link>
                                </motion.div>
                                <motion.div variants={linkVariants}>
                                    <Link className={`${linkStyle('/booking')} text-xl`} href='/booking'>Book online</Link>
                                </motion.div>
                                <motion.div variants={linkVariants}>
                                    <Link className={`${linkStyle('/contact')} text-xl`} href='/contact'>Contact us</Link>
                                </motion.div>
                                <motion.div variants={linkVariants}>
                                    <Link className={`${linkStyle('/faqs')} text-xl`} href='/faqs'>FAQ</Link>
                                </motion.div>
                            </motion.div>   </SheetContent>
                    </Sheet>
                </div>
            </motion.header >
        </>
    )
}

export default NavBar