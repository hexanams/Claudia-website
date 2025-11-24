import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import {
  RiFacebookCircleFill,
  RiLinkedinFill,
  RiTwitterXFill,
  RiYoutubeFill,
} from "react-icons/ri";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="p-5 lg:px-16 lg:py-20">
      <div className="block gap-5 lg:flex justify-between">
        <div className="flex flex-col gap-6 lg:w-1/2">
          <div className="flex items-center w-[200px] h-[4.5rem]">
            <Image
              src="/logo.png"
              alt="logo"
              width={200}
              height={40}
              priority
              quality={100}
            />
          </div>

          <p className="text-base text-light">
            Subscribe to our newsletter for the latest updates on features and
            services.
          </p>

          <div className="flex flex-col gap-3">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Your email here"
                className="p-3 w-[365px] rounded-md text-[#939393] border-[#b48470] border"
              />
              <button className="border-[#b48470] border py-3 px-6 text-[#939393] rounded-md font-sweet-sans">
                Join
              </button>
            </div>
            <p className="text-xs text-light">
              By subscribing, you consent to our Privacy Policy and receiving
              updates.
            </p>
          </div>
        </div>

        <div className="mt-5 lg:mt-0 flex gap-10 justify-end lg:w-1/2">
          <div className="flex flex-col gap-4 w-1/2 items-end">
            <p className="font-semibold text-base">Quick Links</p>
            <div className="flex flex-col justify-center items-end font-grotesk">
              <Link className="py-2 text-sm font-extralight" href="/about">
                About Me
              </Link>
              <Link className="py-2 text-sm font-light" href="/contact">
                Contact Us
              </Link>
              <Link className="py-2 text-sm font-light" href="/">
                Services
              </Link>
              <Link className="py-2 text-sm font-light" href="/">
                Blog Posts
              </Link>
              <Link className="py-2 text-sm font-light" href="/faqs">
                FAQs
              </Link>
            </div>
          </div>

          {/* <div className='flex flex-col gap-4 w-1/2'>
                        <p className='font-semibold text-base '>Connect With Us</p>
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
                    </div> */}
        </div>
      </div>

      <div className="mt-20 border-t-2 flex flex-col py-2 lg:p-0 lg:flex-row justify-between items-center gap-5 lg:items-end h-20">
        <div className="font-light text-sm font-sweet-sans">
          © {new Date().getFullYear()} Claudia. All rights reserved.
        </div>
        <div className="flex gap-6">
          <div className="font-canela underline cursor-pointer text-xs lg:text-sm ">
            Privacy Policy
          </div>
          <div className="font-canela underline cursor-pointer text-xs lg:text-sm ">
            Terms of Service
          </div>
          <div className="font-canela underline cursor-pointer text-xs lg:text-sm ">
            Cookie Settings Policy
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
