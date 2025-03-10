"use client"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    FormDescription
} from "@/components/ui/form"
import { Input } from "./ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { ChevronLeft, Mail, Phone } from 'lucide-react'
import Image from "next/image"
import { useState } from 'react'
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Calendar } from './ui/calendar'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Textarea } from "./ui/textarea"

const formSchema = z.object({
    first_name: z.string().min(2, { message: "First name must be at least 2 characters.", }),
    last_name: z.string().min(2, { message: "Last name must be at least 2 characters.", }),
    description: z.string().optional(),
    email: z.string().email().min(2, { message: "Email must be at least 2 characters.", }),
    number: z.number().min(2, { message: "Phone number must be at least 2 characters.", }),
})


const Booking = () => {
    const [tab, setTab] = useState(0)
    const [date, setDate] = useState<Date | undefined>(new Date())

    return (
        <>
            <section className="px-5 h-[434px] md:px-[6.3rem] pb-14 bg-[url('/booking-hero.svg')] w-full bg-cover bg-center bg-no-repeat flex items-end">
                <div>
                    <h1 className='text-[#F2F2F2] text-xl md:text-5xl font-extrabold'>Book a Consultation Online</h1>
                    <p className='text-xs text-white lg:text-lg font-light'>Taking the first step toward therapy is a sign of strength, and we&apos;re here to make it as easy as possible. Schedule your consultation online at a time that works for you. Whether you have questions about our services or are ready to begin your journey, we&apos;re here to support you.</p>
                </div>
            </section>
            <section className='bg-[#EEECEB] flex flex-col justify-center items-center py-10 md:py-40'>
                <div className='text-center flex flex-col gap-2'>
                    <h1 className='font-extrabold text-xl md:text-3xl'>Free 15 minutes consultation call</h1>
                    <h2 className='text-base'>Conducted via Phone or Video Call with me</h2>
                </div>


                <div className='mt-10 md:mt-20 flex flex-col md:flex-row items-center gap-8 justify-between'>
                    <div className="relative md:w-fit h-fit">
                        <div className="hidden xl:inline w-[380px] h-[457px] absolute left-5 -top-5 bg-[#C7C2BE] z-0" />
                        <Image
                            className="relative md:z-10 z-0"
                            alt="image gallery"
                            src="/Claudia.svg"
                            width={380}
                            height={457}
                            fetchPriority="high"
                            priority
                        />
                    </div>

                    <div className='flex flex-col gap-6 items-center'>
                        <div className='bg-white py-8 px-10 flex flex-col gap-4 md:gap-8'>
                            <div className='flex gap-3.5 items-center'>
                                <Phone className='text-black size-4' />
                                <h4 className='text-sm md:text-base'>+29000000000</h4>
                            </div>
                            <div className='flex gap-3.5 items-center'>
                                <Mail className='text-black size-4' />
                                <h4 className='text-sm md:text-base'>claudia@empoweredtherapy.com</h4>
                            </div>
                        </div>

                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="outline" className='bg-[#C99D86] py-2 px-5 rounded-sm text-[#EFE9E3] text-base text-white'>
                                    Book an appointment
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="overflow-auto min-w-full md:min-w-[60rem] lg:min-w-6xl md:px-12 py-20 lg:px-32 flex flex-col items-center">
                                <DialogHeader>
                                    <DialogTitle className='text-sm md:text-3xl font-extrabold text-center'>
                                        FREE 15 Minute Consultation Call
                                    </DialogTitle>
                                    <DialogDescription className='text-xs md:text-base text-center font-light text-[#666666]'>
                                        Not sure if therapy is the right fit for you? We&apos;re here to help! Schedule a free 15-minute consultation call to discuss your needs, ask questions, and learn more about how we can support you. This no-obligation call is a great opportunity to get to know us and decide how we can best work together on your path to healing.
                                    </DialogDescription>
                                </DialogHeader>
                                {tab === 0 ? <TabOne
                                    setTab={setTab}
                                    tab={tab}
                                    date={date!}
                                    setDate={setDate}
                                /> : <TabTwo
                                    setTab={setTab}
                                    tab={tab}
                                    date={date!}
                                />}
                            </DialogContent>
                        </Dialog>

                    </div>
                </div>
            </section >
        </>
    )
}

export default Booking

export const TabOne = ({ setTab, tab, date, setDate }: {
    setTab: React.Dispatch<React.SetStateAction<number>>,
    tab: number
    date: Date | undefined
    setDate: React.Dispatch<React.SetStateAction<Date | undefined>>
}) => {
    const formattedDate = (date: Date) => {
        return new Intl.DateTimeFormat('en-GB', { weekday: 'long', day: 'numeric', month: 'long' }).format(date);
    }

    return (
        <div className='mt-11 flex justify-center items-center md:items-start flex-col gap-6 w-fit'>
            <div className="flex flex-col items-center md:flex-row gap-4 md:gap-36">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={(day) => setDate(day as Date)}
                    className="rounded-md md:border md:shadow flex justify-center p-0"
                />

                <div className='h-fit'>
                    <h2 className='text-base text-[#1A1A1A] mb-4'>{formattedDate(date!)}</h2>
                    <div className='grid grid-cols-2 gap-4 h-fit'>
                        <div className='bg-[#EFE9E3] w-[115px] md:w-[150px] h-[40px] flex justify-center items-center text-[#C99D86]'>
                            15:30
                        </div>
                        <div className='bg-[#EFE9E3] w-[115px] md:w-[150px] h-[40px] flex justify-center items-center text-[#C99D86]'>
                            16:00
                        </div>
                        <div className='bg-[#EFE9E3] w-[115px] md:w-[150px] h-[40px] flex justify-center items-center text-[#C99D86]'>
                            16:30
                        </div>
                        <div className='bg-[#EFE9E3] w-[115px] md:w-[150px] h-[40px] flex justify-center items-center text-[#C99D86]'>
                            17:00
                        </div>
                    </div>

                    <Button variant="ghost"
                        onClick={() => setTab(tab + 1)}
                        className='bg-[#C99D86] w-full mt-4 md:mt-16 rounded py-2 px-5 text-[#EFE9E3]'
                    >
                        Next
                    </Button>
                </div>
            </div>
        </div>
    )
}


export const TabTwo = ({ setTab, tab, date }: { setTab: React.Dispatch<React.SetStateAction<number>>, tab: number, date: Date }) => {
    const formattedDate = (date: Date) => {
        return new Intl.DateTimeFormat('en-GB', { weekday: 'long', day: 'numeric', month: 'long' }).format(date);
    }

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
            <div
                className='flex gap-2 text-base mb-8 cursor-pointer'
                onClick={() => setTab(tab - 1)}
            >
                <ChevronLeft className='size-6' />
                Back
            </div>

            <div className="flex flex-col items-start justify-between w-full md:flex-row gap-4 ">
                <div>
                    <h1 className='text-base lg:text-xl font-extrabold'>Booking Details</h1>
                    <h2 className='text-sm lg:text-base'>Free 15 minutes Consultation call</h2>
                    <h2 className='text-sm lg:text-base'>{formattedDate(date!)} at { }</h2>
                </div>

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
                                Book now
                            </Button>
                        </div>

                    </form>
                </Form>
            </div>
        </div>
    )
}

