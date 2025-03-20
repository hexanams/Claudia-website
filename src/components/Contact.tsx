"use client"

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import emailjs from '@emailjs/browser'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'motion/react'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { toast } from "sonner"
import { z } from 'zod'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { MapPin, Mail, Phone } from 'lucide-react'

const formSchema = z.object({
    first_name: z.string().min(2, { message: "First name must be at least 2 characters.", }),
    last_name: z.string().min(2, { message: "Last name must be at least 2 characters.", }),
    description: z.string().optional(),
    email: z.string().email().min(2, { message: "Email must be at least 2 characters.", }),
    phone_number: z.coerce.number().min(2, { message: "Phone number must be at least 2 characters.", }),
    about_us: z.enum(['FACEBOOK, X, INSTAGRAM, YOUTUBE, LINKEDIN, OTHERS']),
})

const Contact = () => {

    const fadeIn = (direction = "up", delay = 0) => ({
        hidden: { opacity: 0, y: direction === "up" ? 30 : -30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay } },
    });


    return (
        <section className='p-3 md:px-5 lg:px-[100px] pt-[7px] pb-[53px] bg-[#EEECEB]'>
            <div className='p-2 bg-white md:px-[54px] md:py-[51px]'>

                <motion.div
                    className='flex flex-col lg:flex-row gap-[6.5rem]'
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn()}
                >
                    <motion.div
                        className='flex flex-col gap-8 w-full lg:w-1/2'
                        variants={fadeIn("up", 0.1)}
                    >
                        <div className='flex flex-col gap-4'>
                            <motion.div className='px-4 py-2 bg-[#EEECEB] text-[#C7C2BE] rounded-3xl w-fit font-sweet-sans'>
                                Contact Us
                            </motion.div>
                            <motion.div className='font-canela font-extrabold text-4xl text-[#939393]'>
                                Get in touch with Claudia
                            </motion.div>
                            <motion.p className='font-light text-base text-[#939393] line-clamp-3'>
                                We are here to support you on your journey to emotional wellness. Whether you have questions, need more information or are ready to book your first session, don’t forget to reach out. We’d love to hear from you.
                            </motion.p>
                        </div>

                        <motion.div className="relative flex justify-center lg:w-fit h-fit" variants={fadeIn("up", 0.2)}>
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
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className='w-full lg:w-1/2 flex flex-col items-center md:items-start'
                        variants={fadeIn("up", 0.3)}
                    >
                        <div className='font-canela font-extrabold text-2xl text-[#B6B6B6] mb-2'>Ready for an expert consultation?</div>
                        <p className='text-base text-[#B6B6B6]'>Let&apos;s begin 😊</p>
                        <ContactForm />
                    </motion.div>
                </motion.div>

                <div className='w-full flex justify-center mt-13'>
                    <motion.div
                        className='flex flex-col w-[400px] h-fit items-center'
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn()}
                    >
                        <div className="font-canela text-3xl text-[#939393]">Reach Out to Us</div>
                        <p className='mt-[10px] text-[#5C5C5C] text-center'>Feel free to reach out to us, be it in come visiting, or on our social media handle.</p>

                        <div className='mt-7 py-8 px-10 flex flex-col gap-10 item-start justify-center'>
                            <div className='flex gap-3.5 items-center'>
                                <Phone className='text-[#5C5C5C] size-4' />
                                <p className=' text-sm md:text-base text-[#5C5C5C]'>+29000000000</p>
                            </div>
                            <div className='flex gap-3.5 items-center'>
                                <Mail className='size-4 text-[#5C5C5C]' />
                                <p className='text-sm md:text-base text-[#5C5C5C]'>claudia@empoweredtherapy.com</p>
                            </div>
                            <div className='flex gap-3.5 items-center'>
                                <MapPin className='size-4 text-[#5C5C5C]' />
                                <p className='text-sm md:text-base text-[#5C5C5C]'>Currently offering online sessions only </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>

    )
}

export default Contact

const ContactForm = () => {
    const fadeIn = (direction = "up", delay = 0) => ({
        hidden: { opacity: 0, y: direction === "up" ? 30 : -30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay } },
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            first_name: "",
            last_name: "",
            email: "",
            phone_number: 0,
            description: "",
            about_us: undefined
        },
    })

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        const templateParams = {
            from_name: `${data.first_name} ${data.last_name}`,
            to_name: "Claudia",
            message: data.description,
            reply_to: data.email,
            heard_from: data.about_us,
        };
        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_SERVICE_ID!,
                process.env.NEXT_PUBLIC_TEMPLATE_ID!,
                templateParams,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );
            toast("Email sent")
            form.reset();
        } catch (error) {
            toast.error('Failed to send email. Please try again.');
            console.error(error)
        }
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn("up", 0.4)}
            className='mt-4 md:mt-11 flex justify-center items-start flex-col md:gap-6 w-full'>
            <div className="flex flex-col items-start justify-center lg:justify-between w-full md:flex-row gap-4">
                <Form {...form}>
                    <form className='w-full' onSubmit={form.handleSubmit(onSubmit)}>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-6 w-full">
                            {[
                                { field: "first_name", label: "First Name", placeholder: "First name " },
                                { field: "last_name", label: "Last Name", placeholder: "Last name" },
                                { field: "email", label: "Email", placeholder: "Enter your email address" },
                                { field: "number", label: "Phone Number", placeholder: "Enter your phone number" },
                            ].map(({ field, label, placeholder }, index) => (
                                <motion.div className="w-full" key={field} variants={fadeIn("up", index * 0.1)}>
                                    <FormField
                                        control={form.control}
                                        name={field as "phone_number" | "first_name" | "last_name" | "description" | "email"}
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="font-grotesk text-sm text-[#939393] md:text-base">{label}</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        {...field}
                                                        className="w-full lg:w-[291px] h-[56px] py-[10px] px-4 text-[#B6B6B6] border rounded-[8px]"
                                                        placeholder={placeholder}
                                                    />
                                                </FormControl>
                                                <FormMessage className="text-xs text-destructive" />
                                            </FormItem>
                                        )}
                                    />
                                </motion.div>
                            ))}

                        </div>

                        <FormField
                            control={form.control}
                            name="about_us"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-sm font-grotesk text-[#939393] md:text-base">How did you hear about us?</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger
                                                size='default'
                                                className="w-full py-[10px] px-4 border rounded-[8px] text-[#B6B6B6]"
                                            >
                                                <SelectValue className="text-[#B6B6B6]" placeholder="Select an option" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent className='w-full'>
                                            <SelectItem value="X">X</SelectItem>
                                            <SelectItem value="FACEBOOK">FACEBOOK</SelectItem>
                                            <SelectItem value="INSTAGRAM">INSTAGRAM</SelectItem>
                                            <SelectItem value="LINKEDIN">LINKEDIN</SelectItem>
                                            <SelectItem value="YOUTUBE">YOUTUBE</SelectItem>
                                            <SelectItem value="OTHERS">OTHERS</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage className='text-xs text-destructive' />
                                </FormItem>
                            )}
                        />

                        <motion.div className='mt-6' variants={fadeIn("up", 0.5)}>
                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-sm font-grotesk text-[#939393] md:text-base">Your message</FormLabel>
                                        <Textarea className="w-full border text-[#B6B6B6]" {...field} placeholder="I am seeking therapy because..." />
                                        <FormMessage className='text-xs text-destructive' />
                                    </FormItem>
                                )}
                            />
                        </motion.div>

                        <motion.div className="w-full lg:w-fit mt-8" variants={fadeIn("up", 0.6)}>
                            <Button type="submit" className="h-14 bg-[#C99D86] hover:bg-[#d8bdaf] w-full md:w-[361px] py-2 px-5 text-white font-sweet-sans">Send Message</Button>
                        </motion.div>
                    </form>
                </Form>
            </div>
        </motion.div >
    )
}

