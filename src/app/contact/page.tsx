"use client"

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { zodResolver } from '@hookform/resolvers/zod'
import { Mail, MapPin, Phone } from 'lucide-react'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { z } from 'zod'


const formSchema = z.object({
    first_name: z.string().min(2, { message: "First name must be at least 2 characters.", }),
    last_name: z.string().min(2, { message: "Last name must be at least 2 characters.", }),
    description: z.string().optional(),
    email: z.string().email().min(2, { message: "Email must be at least 2 characters.", }),
    number: z.number().min(2, { message: "Phone number must be at least 2 characters.", }),
})

const Page = () => {
    return (
        <section className='p-3 md:px-5 lg:px-[100px] pt-[7px] pb-[53px] bg-[#EEECEB]'>
            <div className='p-2 bg-white md:px-[54px] md:py-[51px]'>

                <div className=' flex flex-col lg:flex-row gap-[6.5rem]'>
                    <div className='flex flex-col gap-8 w-full lg:w-1/2'>
                        <div className='flex flex-col gap-4'>
                            <div className='px-4 py-2 bg-[#EEECEB] text-[#C7C2BE] rounded-3xl w-fit'>Contact Us</div>
                            <h1 className='font-extrabold text-4xl text-[#939393]'>Get in touch with Claudia</h1>
                            <h2 className='font-light text-base text-[#939393]'>
                                We are here to support you on your journey to emotional wellness. Whether you have questions, need more information or are ready  to book your first session, don&apos;t forget to reach out. We&apos;d love to hear from you.
                            </h2>
                        </div>

                        <div className="relative flex justify-center lg:w-fit h-fit">
                            <div className="hidden xl:inline w-[380px] h-[457px] absolute left-5 -top-5 bg-[#C7C2BE] z-0" />

                            <Image
                                className="relative z-10"
                                alt="image gallery"
                                src="/Claudia.svg"
                                width={380}
                                height={457}
                                fetchPriority="high"
                                priority
                            />
                        </div>

                    </div>
                    <div className='w-full lg:w-1/2 flex flex-col items-center md:items-start'>
                        <h1 className='font-extrabold text-2xl text-[#131313] mb-2'>Ready for an expert consultation</h1>
                        <h2 className='text-base text-[#131313]'>Let&apos;s begin 😊</h2>

                        <ContactForm />
                    </div>
                </div>

                <div className='mt-[52px] flex flex-col items-center text-center justify-center'>
                    <h1 className='font-extrabold text-xl md:text-3xl text-[#131313]'>Reach out to us</h1>
                    <h2 className='text-sm md:text-lg font-medium text-[#929292]'>
                        Feel free to reach out to us, be it in come visiting, or on our social media handle.
                    </h2>
                    <div className='flex flex-col gap-10 px-11 pt-7'>
                        <div className='gap-[14px] flex items-center text-[#5C5C5C] text-sm md:text-base w-fit'>
                            <Phone className='size-6' />
                            +293456789
                        </div>
                        <div className='gap-[14px] flex items-center text-[#5C5C5C] text-sm md:text-base w-fit'>
                            <Mail className='size-6' />
                            claudia@empoweredtherapy.com
                        </div>
                        <div className='gap-[14px] flex items-center text-[#5C5C5C] text-sm md:text-base w-fit'>
                            <MapPin className='size-6' />
                            Currently offering online sessions only
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Page

export const ContactForm = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            first_name: "",
            last_name: "",
            email: "",
            number: undefined,
            description: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }
    return (
        <div className='mt-4 md:mt-11 flex justify-center items-start flex-col md:gap-6 w-full'>
            <div className="flex flex-col items-start justify-center lg:justify-between w-full md:flex-row gap-4">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} >
                        <div className="h-fit grid grid-col-1 md:grid-cols-2 gap-6 mb-6">
                            <FormField
                                control={form.control}
                                name="first_name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-sm text-[#131313] md:text-base">First name</FormLabel>
                                        <FormControl>
                                            <Input
                                                className="w-full md:w-[291px] py-[10px] px-4 border text-sm md:text-base text-[#B6BB6B6]"
                                                placeholder="First name"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage className="text-xs text-destructive" />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="last_name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-sm text-[#131313] md:text-base">Last name</FormLabel>
                                        <FormControl>
                                            <Input
                                                className="w-full md:w-[291px] py-[10px] px-4 border text-sm md:text-base text-[#B6BB6B6]"
                                                placeholder="First name"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage className="text-xs text-destructive" />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-sm text-[#131313] md:text-base">Email address</FormLabel>
                                        <FormControl>
                                            <Input
                                                className="w-full md:w-[291px] py-[10px] px-4 border text-sm md:text-base text-[#B6BB6B6]"
                                                placeholder="Enter your email address"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage className="text-xs text-destructive" />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="number"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-sm text-[#131313] md:text-base">Phone Number</FormLabel>
                                        <FormControl>
                                            <Input
                                                className="w-full md:w-[291px] py-[10px] px-4 border text-sm md:text-base text-[#B6BB6B6]"
                                                placeholder="Enter your phone number"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage className="text-xs text-destructive" />
                                    </FormItem>
                                )}
                            />
                        </div >
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <div>
                                            <FormDescription className="text-[#131313] text-xs md:text-base">
                                                Please provide a short explanation about what you are seeking support with
                                            </FormDescription>
                                            <Textarea
                                                placeholder="I am seeking therapy because"
                                                {...field}
                                            />
                                        </div>

                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="w-full flex justify-center">
                            <Button
                                variant='ghost'
                                className="mt-8 bg-[#C99D86] hover:bg-[#d8bdaf] w-[361px] py-2 px-5 text-center text-white"
                                type="submit"
                            >
                                Send Message
                            </Button>
                        </div>

                    </form>
                </Form>
            </div>
        </div>
    )
}

