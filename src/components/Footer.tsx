import Link from 'next/link'
import { BsInstagram } from 'react-icons/bs'
import { RiFacebookCircleFill, RiLinkedinFill, RiTwitterXFill, RiYoutubeFill } from 'react-icons/ri'


const Footer = () => {
    return (
        <footer className='p-5 lg:px-16 lg:py-20'>
            <div className='block gap-5 lg:flex justify-between'>
                <div className='flex flex-col gap-6 lg:w-1/2'>
                    <h1 className='text-3xl'>Logo</h1>
                    <p className='text-base text-light'>Subscribe to our newsletter for the latest updates on features and services.</p>

                    <div className='flex flex-col gap-3'>
                        <div className='flex gap-4'>
                            <input
                                type='text'
                                placeholder='Your email here'
                                className='p-3 w-[365px] border rounded-md'
                            />
                            <button className='border-[#16A8B6] border py-3 px-6 text-[#16A8B6] rounded-md'>
                                Join
                            </button>
                        </div>
                        <p className='text-xs text-light'>By subscribing, you consent to our Privacy Policy and receiving updates.</p>
                    </div>
                </div>

                <div className='mt-5 lg:mt-0 flex gap-10 justify-around lg:w-1/2'>
                    <div className='flex flex-col gap-4 w-1/2'>
                        <h2 className='font-medium text-base'>Quick Links</h2>
                        <div className='flex flex-col justify-center'>
                            <Link className='py-2 text-sm font-light' href='/'>About Us</Link>
                            <Link className='py-2 text-sm font-light' href='/'>Contact Us</Link>
                            <Link className='py-2 text-sm font-light' href='/'>Services</Link>
                            <Link className='py-2 text-sm font-light' href='/'>Blog Posts</Link>
                            <Link className='py-2 text-sm font-light' href='/'>FAQs</Link>
                        </div>
                    </div>

                    <div className='flex flex-col gap-4 w-1/2'>
                        <h2 className='font-medium text-base'>Connect With Us</h2>
                        <div className='flex flex-col'>
                            <div className='flex gap-1 py-2 items-center'>
                                <RiFacebookCircleFill />
                                <a className='text-sm font-light' href='' target='blank' >Facebook Page</a>

                            </div>
                            <div className='flex gap-1 py-2 items-center'>
                                <BsInstagram />
                                <a className='text-sm font-light' href='' target='blank' >Instagram Feed</a>

                            </div>
                            <div className='flex gap-1 py-2 items-center'>
                                <RiTwitterXFill />
                                <a className='text-sm font-light' href='' target='blank' >Twitter Profile</a>
                            </div>

                            <div className='flex gap-1 py-2 items-center'>
                                <RiLinkedinFill />
                                <a className='text-sm font-light' href='' target='blank' >LinkedIn Page</a>

                            </div>
                            <div className='flex gap-1 py-2 items-center'>
                                <RiYoutubeFill />
                                <a className='text-sm font-light' href='' target='blank' >YouTube Channel</a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-20 border-t-2 flex flex-col py-2 lg:p-0 lg:flex-row justify-between items-center gap-5 lg:items-end h-20'>
                <div className='font-light text-sm'>© 2025 Claudia. All rights reserved.</div>
                <div className='flex gap-6'>
                    <h1 className='underline cursor-pointer text-sm'>Privacy Policy</h1>
                    <h1 className='underline cursor-pointer text-sm'>Terms of Service</h1>
                    <h1 className='underline cursor-pointer text-sm'>Cookie Settings Policy</h1>
                </div>
            </div>
        </footer>
    )
}

export default Footer